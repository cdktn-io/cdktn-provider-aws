# `dataAwsResiliencehubv2Policy` Submodule <a name="`dataAwsResiliencehubv2Policy` Submodule" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResiliencehubv2Policy <a name="DataAwsResiliencehubv2Policy" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resiliencehubv2_policy aws_resiliencehubv2_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy(scope: Construct, id: string, config: DataAwsResiliencehubv2PolicyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig">DataAwsResiliencehubv2PolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig">DataAwsResiliencehubv2PolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsResiliencehubv2Policy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsResiliencehubv2Policy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsResiliencehubv2Policy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsResiliencehubv2Policy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resiliencehubv2_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsResiliencehubv2Policy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.availabilitySlo">availabilitySlo</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList">DataAwsResiliencehubv2PolicyAvailabilitySloList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dataRecovery">dataRecovery</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList">DataAwsResiliencehubv2PolicyDataRecoveryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiAz">multiAz</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList">DataAwsResiliencehubv2PolicyMultiAzList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiRegion">multiRegion</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList">DataAwsResiliencehubv2PolicyMultiRegionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `availabilitySlo`<sup>Required</sup> <a name="availabilitySlo" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.availabilitySlo"></a>

```typescript
public readonly availabilitySlo: DataAwsResiliencehubv2PolicyAvailabilitySloList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList">DataAwsResiliencehubv2PolicyAvailabilitySloList</a>

---

##### `dataRecovery`<sup>Required</sup> <a name="dataRecovery" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.dataRecovery"></a>

```typescript
public readonly dataRecovery: DataAwsResiliencehubv2PolicyDataRecoveryList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList">DataAwsResiliencehubv2PolicyDataRecoveryList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `multiAz`<sup>Required</sup> <a name="multiAz" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiAz"></a>

```typescript
public readonly multiAz: DataAwsResiliencehubv2PolicyMultiAzList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList">DataAwsResiliencehubv2PolicyMultiAzList</a>

---

##### `multiRegion`<sup>Required</sup> <a name="multiRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.multiRegion"></a>

```typescript
public readonly multiRegion: DataAwsResiliencehubv2PolicyMultiRegionList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList">DataAwsResiliencehubv2PolicyMultiRegionList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2Policy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResiliencehubv2PolicyAvailabilitySlo <a name="DataAwsResiliencehubv2PolicyAvailabilitySlo" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2PolicyAvailabilitySlo: dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo = { ... }
```


### DataAwsResiliencehubv2PolicyConfig <a name="DataAwsResiliencehubv2PolicyConfig" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2PolicyConfig: dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resiliencehubv2_policy#arn DataAwsResiliencehubv2Policy#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/resiliencehubv2_policy#region DataAwsResiliencehubv2Policy#region}

---

### DataAwsResiliencehubv2PolicyDataRecovery <a name="DataAwsResiliencehubv2PolicyDataRecovery" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2PolicyDataRecovery: dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery = { ... }
```


### DataAwsResiliencehubv2PolicyMultiAz <a name="DataAwsResiliencehubv2PolicyMultiAz" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2PolicyMultiAz: dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz = { ... }
```


### DataAwsResiliencehubv2PolicyMultiRegion <a name="DataAwsResiliencehubv2PolicyMultiRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2PolicyMultiRegion: dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResiliencehubv2PolicyAvailabilitySloList <a name="DataAwsResiliencehubv2PolicyAvailabilitySloList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get"></a>

```typescript
public get(index: number): DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference <a name="DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.target">target</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo">DataAwsResiliencehubv2PolicyAvailabilitySlo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.target"></a>

```typescript
public readonly target: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySloOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResiliencehubv2PolicyAvailabilitySlo;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyAvailabilitySlo">DataAwsResiliencehubv2PolicyAvailabilitySlo</a>

---


### DataAwsResiliencehubv2PolicyDataRecoveryList <a name="DataAwsResiliencehubv2PolicyDataRecoveryList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get"></a>

```typescript
public get(index: number): DataAwsResiliencehubv2PolicyDataRecoveryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResiliencehubv2PolicyDataRecoveryOutputReference <a name="DataAwsResiliencehubv2PolicyDataRecoveryOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes">timeBetweenBackupsInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery">DataAwsResiliencehubv2PolicyDataRecovery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `timeBetweenBackupsInMinutes`<sup>Required</sup> <a name="timeBetweenBackupsInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.timeBetweenBackupsInMinutes"></a>

```typescript
public readonly timeBetweenBackupsInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecoveryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResiliencehubv2PolicyDataRecovery;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyDataRecovery">DataAwsResiliencehubv2PolicyDataRecovery</a>

---


### DataAwsResiliencehubv2PolicyMultiAzList <a name="DataAwsResiliencehubv2PolicyMultiAzList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get"></a>

```typescript
public get(index: number): DataAwsResiliencehubv2PolicyMultiAzOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResiliencehubv2PolicyMultiAzOutputReference <a name="DataAwsResiliencehubv2PolicyMultiAzOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes">rpoInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes">rtoInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz">DataAwsResiliencehubv2PolicyMultiAz</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.disasterRecoveryApproach"></a>

```typescript
public readonly disasterRecoveryApproach: string;
```

- *Type:* string

---

##### `rpoInMinutes`<sup>Required</sup> <a name="rpoInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rpoInMinutes"></a>

```typescript
public readonly rpoInMinutes: number;
```

- *Type:* number

---

##### `rtoInMinutes`<sup>Required</sup> <a name="rtoInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.rtoInMinutes"></a>

```typescript
public readonly rtoInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAzOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResiliencehubv2PolicyMultiAz;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiAz">DataAwsResiliencehubv2PolicyMultiAz</a>

---


### DataAwsResiliencehubv2PolicyMultiRegionList <a name="DataAwsResiliencehubv2PolicyMultiRegionList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get"></a>

```typescript
public get(index: number): DataAwsResiliencehubv2PolicyMultiRegionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResiliencehubv2PolicyMultiRegionOutputReference <a name="DataAwsResiliencehubv2PolicyMultiRegionOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Policy } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach">disasterRecoveryApproach</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes">rpoInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes">rtoInMinutes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion">DataAwsResiliencehubv2PolicyMultiRegion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `disasterRecoveryApproach`<sup>Required</sup> <a name="disasterRecoveryApproach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.disasterRecoveryApproach"></a>

```typescript
public readonly disasterRecoveryApproach: string;
```

- *Type:* string

---

##### `rpoInMinutes`<sup>Required</sup> <a name="rpoInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rpoInMinutes"></a>

```typescript
public readonly rpoInMinutes: number;
```

- *Type:* number

---

##### `rtoInMinutes`<sup>Required</sup> <a name="rtoInMinutes" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.rtoInMinutes"></a>

```typescript
public readonly rtoInMinutes: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResiliencehubv2PolicyMultiRegion;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Policy.DataAwsResiliencehubv2PolicyMultiRegion">DataAwsResiliencehubv2PolicyMultiRegion</a>

---



