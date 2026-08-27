# `ephemeralAwsEcrpublicAuthorizationToken` Submodule <a name="`ephemeralAwsEcrpublicAuthorizationToken` Submodule" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsEcrpublicAuthorizationToken <a name="EphemeralAwsEcrpublicAuthorizationToken" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/ecrpublic_authorization_token aws_ecrpublic_authorization_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer"></a>

```typescript
import { ephemeralAwsEcrpublicAuthorizationToken } from '@cdktn/provider-aws'

new ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken(scope: Construct, id: string, config?: EphemeralAwsEcrpublicAuthorizationTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig">EphemeralAwsEcrpublicAuthorizationTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig">EphemeralAwsEcrpublicAuthorizationTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isConstruct"></a>

```typescript
import { ephemeralAwsEcrpublicAuthorizationToken } from '@cdktn/provider-aws'

ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformElement"></a>

```typescript
import { ephemeralAwsEcrpublicAuthorizationToken } from '@cdktn/provider-aws'

ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAwsEcrpublicAuthorizationToken } from '@cdktn/provider-aws'

ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.authorizationToken">authorizationToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.expiresAt">expiresAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.userName">userName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `authorizationToken`<sup>Required</sup> <a name="authorizationToken" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.authorizationToken"></a>

```typescript
public readonly authorizationToken: string;
```

- *Type:* string

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.expiresAt"></a>

```typescript
public readonly expiresAt: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.userName"></a>

```typescript
public readonly userName: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsEcrpublicAuthorizationTokenConfig <a name="EphemeralAwsEcrpublicAuthorizationTokenConfig" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.Initializer"></a>

```typescript
import { ephemeralAwsEcrpublicAuthorizationToken } from '@cdktn/provider-aws'

const ephemeralAwsEcrpublicAuthorizationTokenConfig: ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsEcrpublicAuthorizationToken.EphemeralAwsEcrpublicAuthorizationTokenConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/ephemeral-resources/ecrpublic_authorization_token#region EphemeralAwsEcrpublicAuthorizationToken#region}

---



