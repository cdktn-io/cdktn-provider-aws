# `ephemeralAwsKmsSecrets` Submodule <a name="`ephemeralAwsKmsSecrets` Submodule" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsKmsSecrets <a name="EphemeralAwsKmsSecrets" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets aws_kms_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer"></a>

```typescript
import { ephemeralAwsKmsSecrets } from '@cdktn/provider-aws'

new ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets(scope: Construct, id: string, config?: EphemeralAwsKmsSecretsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig">EphemeralAwsKmsSecretsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig">EphemeralAwsKmsSecretsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret">putSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret">resetSecret</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putSecret` <a name="putSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret"></a>

```typescript
public putSecret(value: IResolvable | EphemeralAwsKmsSecretsSecret[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.putSecret.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecret` <a name="resetSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.resetSecret"></a>

```typescript
public resetSecret(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct"></a>

```typescript
import { ephemeralAwsKmsSecrets } from '@cdktn/provider-aws'

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement"></a>

```typescript
import { ephemeralAwsKmsSecrets } from '@cdktn/provider-aws'

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAwsKmsSecrets } from '@cdktn/provider-aws'

ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext">plaintext</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret">secret</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput">secretInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.plaintext"></a>

```typescript
public readonly plaintext: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secret"></a>

```typescript
public readonly secret: EphemeralAwsKmsSecretsSecretList;
```

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList">EphemeralAwsKmsSecretsSecretList</a>

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.secretInput"></a>

```typescript
public readonly secretInput: IResolvable | EphemeralAwsKmsSecretsSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecrets.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsKmsSecretsConfig <a name="EphemeralAwsKmsSecretsConfig" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.Initializer"></a>

```typescript
import { ephemeralAwsKmsSecrets } from '@cdktn/provider-aws'

const ephemeralAwsKmsSecretsConfig: ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret">secret</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]</code> | secret block. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#region EphemeralAwsKmsSecrets#region}

---

##### `secret`<sup>Optional</sup> <a name="secret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsConfig.property.secret"></a>

```typescript
public readonly secret: IResolvable | EphemeralAwsKmsSecretsSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]

secret block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#secret EphemeralAwsKmsSecrets#secret}

---

### EphemeralAwsKmsSecretsSecret <a name="EphemeralAwsKmsSecretsSecret" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.Initializer"></a>

```typescript
import { ephemeralAwsKmsSecrets } from '@cdktn/provider-aws'

const ephemeralAwsKmsSecretsSecret: ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload">payload</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context">context</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens">grantTokens</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId">keyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#name EphemeralAwsKmsSecrets#name}.

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#payload EphemeralAwsKmsSecrets#payload}.

---

##### `context`<sup>Optional</sup> <a name="context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#context EphemeralAwsKmsSecrets#context}.

---

##### `encryptionAlgorithm`<sup>Optional</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#encryption_algorithm EphemeralAwsKmsSecrets#encryption_algorithm}.

---

##### `grantTokens`<sup>Optional</sup> <a name="grantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.grantTokens"></a>

```typescript
public readonly grantTokens: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#grant_tokens EphemeralAwsKmsSecrets#grant_tokens}.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.60.0/docs/ephemeral-resources/kms_secrets#key_id EphemeralAwsKmsSecrets#key_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### EphemeralAwsKmsSecretsSecretList <a name="EphemeralAwsKmsSecretsSecretList" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer"></a>

```typescript
import { ephemeralAwsKmsSecrets } from '@cdktn/provider-aws'

new ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get"></a>

```typescript
public get(index: number): EphemeralAwsKmsSecretsSecretOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralAwsKmsSecretsSecret[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>[]

---


### EphemeralAwsKmsSecretsSecretOutputReference <a name="EphemeralAwsKmsSecretsSecretOutputReference" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer"></a>

```typescript
import { ephemeralAwsKmsSecrets } from '@cdktn/provider-aws'

new ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext">resetContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm">resetEncryptionAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens">resetGrantTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId">resetKeyId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetContext` <a name="resetContext" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetContext"></a>

```typescript
public resetContext(): void
```

##### `resetEncryptionAlgorithm` <a name="resetEncryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetEncryptionAlgorithm"></a>

```typescript
public resetEncryptionAlgorithm(): void
```

##### `resetGrantTokens` <a name="resetGrantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetGrantTokens"></a>

```typescript
public resetGrantTokens(): void
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.resetKeyId"></a>

```typescript
public resetKeyId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput">contextInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput">encryptionAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput">grantTokensInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput">keyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context">context</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm">encryptionAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens">grantTokens</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId">keyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `contextInput`<sup>Optional</sup> <a name="contextInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.contextInput"></a>

```typescript
public readonly contextInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionAlgorithmInput`<sup>Optional</sup> <a name="encryptionAlgorithmInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithmInput"></a>

```typescript
public readonly encryptionAlgorithmInput: string;
```

- *Type:* string

---

##### `grantTokensInput`<sup>Optional</sup> <a name="grantTokensInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokensInput"></a>

```typescript
public readonly grantTokensInput: string[];
```

- *Type:* string[]

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyIdInput"></a>

```typescript
public readonly keyIdInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `context`<sup>Required</sup> <a name="context" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.context"></a>

```typescript
public readonly context: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `encryptionAlgorithm`<sup>Required</sup> <a name="encryptionAlgorithm" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.encryptionAlgorithm"></a>

```typescript
public readonly encryptionAlgorithm: string;
```

- *Type:* string

---

##### `grantTokens`<sup>Required</sup> <a name="grantTokens" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.grantTokens"></a>

```typescript
public readonly grantTokens: string[];
```

- *Type:* string[]

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.keyId"></a>

```typescript
public readonly keyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecretOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | EphemeralAwsKmsSecretsSecret;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.ephemeralAwsKmsSecrets.EphemeralAwsKmsSecretsSecret">EphemeralAwsKmsSecretsSecret</a>

---



