# `ephemeralAwsStsWebIdentityToken` Submodule <a name="`ephemeralAwsStsWebIdentityToken` Submodule" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsStsWebIdentityToken <a name="EphemeralAwsStsWebIdentityToken" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/sts_web_identity_token aws_sts_web_identity_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer"></a>

```typescript
import { ephemeralAwsStsWebIdentityToken } from '@cdktn/provider-aws'

new ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken(scope: Construct, id: string, config: EphemeralAwsStsWebIdentityTokenConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig">EphemeralAwsStsWebIdentityTokenConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig">EphemeralAwsStsWebIdentityTokenConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetDurationSeconds">resetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetDurationSeconds` <a name="resetDurationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetDurationSeconds"></a>

```typescript
public resetDurationSeconds(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct"></a>

```typescript
import { ephemeralAwsStsWebIdentityToken } from '@cdktn/provider-aws'

ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement"></a>

```typescript
import { ephemeralAwsStsWebIdentityToken } from '@cdktn/provider-aws'

ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAwsStsWebIdentityToken } from '@cdktn/provider-aws'

ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.webIdentityToken">webIdentityToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audienceInput">audienceInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSecondsInput">durationSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithmInput">signingAlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audience">audience</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `webIdentityToken`<sup>Required</sup> <a name="webIdentityToken" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.webIdentityToken"></a>

```typescript
public readonly webIdentityToken: string;
```

- *Type:* string

---

##### `audienceInput`<sup>Optional</sup> <a name="audienceInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audienceInput"></a>

```typescript
public readonly audienceInput: string[];
```

- *Type:* string[]

---

##### `durationSecondsInput`<sup>Optional</sup> <a name="durationSecondsInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSecondsInput"></a>

```typescript
public readonly durationSecondsInput: number;
```

- *Type:* number

---

##### `signingAlgorithmInput`<sup>Optional</sup> <a name="signingAlgorithmInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithmInput"></a>

```typescript
public readonly signingAlgorithmInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.audience"></a>

```typescript
public readonly audience: string[];
```

- *Type:* string[]

---

##### `durationSeconds`<sup>Required</sup> <a name="durationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityToken.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsStsWebIdentityTokenConfig <a name="EphemeralAwsStsWebIdentityTokenConfig" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.Initializer"></a>

```typescript
import { ephemeralAwsStsWebIdentityToken } from '@cdktn/provider-aws'

const ephemeralAwsStsWebIdentityTokenConfig: ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.audience">audience</a></code> | <code>string[]</code> | The intended recipients of the token (populates the `aud` claim in the JWT). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.signingAlgorithm">signingAlgorithm</a></code> | <code>string</code> | The cryptographic algorithm to use for signing the JWT. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.durationSeconds">durationSeconds</a></code> | <code>number</code> | The duration, in seconds, for which the JWT will remain valid. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `audience`<sup>Required</sup> <a name="audience" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.audience"></a>

```typescript
public readonly audience: string[];
```

- *Type:* string[]

The intended recipients of the token (populates the `aud` claim in the JWT).

Must contain between 1 and 10 items.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/sts_web_identity_token#audience EphemeralAwsStsWebIdentityToken#audience}

---

##### `signingAlgorithm`<sup>Required</sup> <a name="signingAlgorithm" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.signingAlgorithm"></a>

```typescript
public readonly signingAlgorithm: string;
```

- *Type:* string

The cryptographic algorithm to use for signing the JWT.

Valid values are `RS256` (RSA with SHA-256) and `ES384` (ECDSA using P-384 curve with SHA-384).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/sts_web_identity_token#signing_algorithm EphemeralAwsStsWebIdentityToken#signing_algorithm}

---

##### `durationSeconds`<sup>Optional</sup> <a name="durationSeconds" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.durationSeconds"></a>

```typescript
public readonly durationSeconds: number;
```

- *Type:* number

The duration, in seconds, for which the JWT will remain valid.

Value can range from 60 to 3600 seconds. Default is 300 seconds (5 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/sts_web_identity_token#duration_seconds EphemeralAwsStsWebIdentityToken#duration_seconds}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.ephemeralAwsStsWebIdentityToken.EphemeralAwsStsWebIdentityTokenConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/ephemeral-resources/sts_web_identity_token#tags EphemeralAwsStsWebIdentityToken#tags}.

---



