# `ephemeralAwsSecretsmanagerSecretVersion` Submodule <a name="`ephemeralAwsSecretsmanagerSecretVersion` Submodule" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralAwsSecretsmanagerSecretVersion <a name="EphemeralAwsSecretsmanagerSecretVersion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version aws_secretsmanager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer"></a>

```typescript
import { ephemeralAwsSecretsmanagerSecretVersion } from '@cdktn/provider-aws'

new ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion(scope: Construct, id: string, config: EphemeralAwsSecretsmanagerSecretVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig">EphemeralAwsSecretsmanagerSecretVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig">EphemeralAwsSecretsmanagerSecretVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionStage">resetVersionStage</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

##### `resetVersionStage` <a name="resetVersionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.resetVersionStage"></a>

```typescript
public resetVersionStage(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct"></a>

```typescript
import { ephemeralAwsSecretsmanagerSecretVersion } from '@cdktn/provider-aws'

ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement"></a>

```typescript
import { ephemeralAwsSecretsmanagerSecretVersion } from '@cdktn/provider-aws'

ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource"></a>

```typescript
import { ephemeralAwsSecretsmanagerSecretVersion } from '@cdktn/provider-aws'

ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretBinary">secretBinary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretString">secretString</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStages">versionStages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretIdInput">secretIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStageInput">versionStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretId">secretId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStage">versionStage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `secretBinary`<sup>Required</sup> <a name="secretBinary" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretBinary"></a>

```typescript
public readonly secretBinary: string;
```

- *Type:* string

---

##### `secretString`<sup>Required</sup> <a name="secretString" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretString"></a>

```typescript
public readonly secretString: string;
```

- *Type:* string

---

##### `versionStages`<sup>Required</sup> <a name="versionStages" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStages"></a>

```typescript
public readonly versionStages: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretIdInput"></a>

```typescript
public readonly secretIdInput: string;
```

- *Type:* string

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `versionStageInput`<sup>Optional</sup> <a name="versionStageInput" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStageInput"></a>

```typescript
public readonly versionStageInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `versionStage`<sup>Required</sup> <a name="versionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.versionStage"></a>

```typescript
public readonly versionStage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralAwsSecretsmanagerSecretVersionConfig <a name="EphemeralAwsSecretsmanagerSecretVersionConfig" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.Initializer"></a>

```typescript
import { ephemeralAwsSecretsmanagerSecretVersion } from '@cdktn/provider-aws'

const ephemeralAwsSecretsmanagerSecretVersionConfig: ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.secretId">secretId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionId">versionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}. |
| <code><a href="#@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionStage">versionStage</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformEphemeralResourceLifecycle;
```

- *Type:* cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.secretId"></a>

```typescript
public readonly secretId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#secret_id EphemeralAwsSecretsmanagerSecretVersion#secret_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#region EphemeralAwsSecretsmanagerSecretVersion#region}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#version_id EphemeralAwsSecretsmanagerSecretVersion#version_id}.

---

##### `versionStage`<sup>Optional</sup> <a name="versionStage" id="@cdktn/provider-aws.ephemeralAwsSecretsmanagerSecretVersion.EphemeralAwsSecretsmanagerSecretVersionConfig.property.versionStage"></a>

```typescript
public readonly versionStage: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/ephemeral-resources/secretsmanager_secret_version#version_stage EphemeralAwsSecretsmanagerSecretVersion#version_stage}.

---



