# `dataAwsLambdamicrovmsImageVersion` Submodule <a name="`dataAwsLambdamicrovmsImageVersion` Submodule" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsLambdamicrovmsImageVersion <a name="DataAwsLambdamicrovmsImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version aws_lambdamicrovms_image_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion(scope: Construct, id: string, config: DataAwsLambdamicrovmsImageVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig">DataAwsLambdamicrovmsImageVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig">DataAwsLambdamicrovmsImageVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsLambdamicrovmsImageVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsLambdamicrovmsImageVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsLambdamicrovmsImageVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsLambdamicrovmsImageVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities">additionalOsCapabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn">baseImageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion">baseImageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn">buildRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact">codeArtifact</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration">cpuConfiguration</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors">egressNetworkConnectors</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables">environmentVariables</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks">hooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn">imageArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging">logging</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources">resources</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason">stateReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt">updatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput">imageIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput">imageVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier">imageIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion">imageVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `additionalOsCapabilities`<sup>Required</sup> <a name="additionalOsCapabilities" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.additionalOsCapabilities"></a>

```typescript
public readonly additionalOsCapabilities: string[];
```

- *Type:* string[]

---

##### `baseImageArn`<sup>Required</sup> <a name="baseImageArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageArn"></a>

```typescript
public readonly baseImageArn: string;
```

- *Type:* string

---

##### `baseImageVersion`<sup>Required</sup> <a name="baseImageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.baseImageVersion"></a>

```typescript
public readonly baseImageVersion: string;
```

- *Type:* string

---

##### `buildRoleArn`<sup>Required</sup> <a name="buildRoleArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.buildRoleArn"></a>

```typescript
public readonly buildRoleArn: string;
```

- *Type:* string

---

##### `codeArtifact`<sup>Required</sup> <a name="codeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.codeArtifact"></a>

```typescript
public readonly codeArtifact: DataAwsLambdamicrovmsImageVersionCodeArtifactList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList">DataAwsLambdamicrovmsImageVersionCodeArtifactList</a>

---

##### `cpuConfiguration`<sup>Required</sup> <a name="cpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.cpuConfiguration"></a>

```typescript
public readonly cpuConfiguration: DataAwsLambdamicrovmsImageVersionCpuConfigurationList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList">DataAwsLambdamicrovmsImageVersionCpuConfigurationList</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `egressNetworkConnectors`<sup>Required</sup> <a name="egressNetworkConnectors" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.egressNetworkConnectors"></a>

```typescript
public readonly egressNetworkConnectors: string[];
```

- *Type:* string[]

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `hooks`<sup>Required</sup> <a name="hooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.hooks"></a>

```typescript
public readonly hooks: DataAwsLambdamicrovmsImageVersionHooksList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList">DataAwsLambdamicrovmsImageVersionHooksList</a>

---

##### `imageArn`<sup>Required</sup> <a name="imageArn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageArn"></a>

```typescript
public readonly imageArn: string;
```

- *Type:* string

---

##### `logging`<sup>Required</sup> <a name="logging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.logging"></a>

```typescript
public readonly logging: DataAwsLambdamicrovmsImageVersionLoggingList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList">DataAwsLambdamicrovmsImageVersionLoggingList</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.resources"></a>

```typescript
public readonly resources: DataAwsLambdamicrovmsImageVersionResourcesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList">DataAwsLambdamicrovmsImageVersionResourcesList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateReason`<sup>Required</sup> <a name="stateReason" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.stateReason"></a>

```typescript
public readonly stateReason: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.updatedAt"></a>

```typescript
public readonly updatedAt: string;
```

- *Type:* string

---

##### `imageIdentifierInput`<sup>Optional</sup> <a name="imageIdentifierInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifierInput"></a>

```typescript
public readonly imageIdentifierInput: string;
```

- *Type:* string

---

##### `imageVersionInput`<sup>Optional</sup> <a name="imageVersionInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersionInput"></a>

```typescript
public readonly imageVersionInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `imageIdentifier`<sup>Required</sup> <a name="imageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageIdentifier"></a>

```typescript
public readonly imageIdentifier: string;
```

- *Type:* string

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifact <a name="DataAwsLambdamicrovmsImageVersionCodeArtifact" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionCodeArtifact: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact = { ... }
```


### DataAwsLambdamicrovmsImageVersionConfig <a name="DataAwsLambdamicrovmsImageVersionConfig" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionConfig: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier">imageIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion">imageVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `imageIdentifier`<sup>Required</sup> <a name="imageIdentifier" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageIdentifier"></a>

```typescript
public readonly imageIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_identifier DataAwsLambdamicrovmsImageVersion#image_identifier}.

---

##### `imageVersion`<sup>Required</sup> <a name="imageVersion" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.imageVersion"></a>

```typescript
public readonly imageVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#image_version DataAwsLambdamicrovmsImageVersion#image_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.69.0/docs/data-sources/lambdamicrovms_image_version#region DataAwsLambdamicrovmsImageVersion#region}

---

### DataAwsLambdamicrovmsImageVersionCpuConfiguration <a name="DataAwsLambdamicrovmsImageVersionCpuConfiguration" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionCpuConfiguration: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration = { ... }
```


### DataAwsLambdamicrovmsImageVersionHooks <a name="DataAwsLambdamicrovmsImageVersionHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionHooks: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks = { ... }
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionHooksMicrovmHooks: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks = { ... }
```


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks = { ... }
```


### DataAwsLambdamicrovmsImageVersionLogging <a name="DataAwsLambdamicrovmsImageVersionLogging" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionLogging: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging = { ... }
```


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatch <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionLoggingCloudwatch: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch = { ... }
```


### DataAwsLambdamicrovmsImageVersionLoggingDisabled <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionLoggingDisabled: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled = { ... }
```


### DataAwsLambdamicrovmsImageVersionResources <a name="DataAwsLambdamicrovmsImageVersionResources" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

const dataAwsLambdamicrovmsImageVersionResources: dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsLambdamicrovmsImageVersionCodeArtifactList <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference <a name="DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifactOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionCodeArtifact;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCodeArtifact">DataAwsLambdamicrovmsImageVersionCodeArtifact</a>

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationList <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference <a name="DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture">architecture</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `architecture`<sup>Required</sup> <a name="architecture" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.architecture"></a>

```typescript
public readonly architecture: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionCpuConfiguration;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionCpuConfiguration">DataAwsLambdamicrovmsImageVersionCpuConfiguration</a>

---


### DataAwsLambdamicrovmsImageVersionHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume">resume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds">resumeTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run">run</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds">runTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend">suspend</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds">suspendTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate">terminate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds">terminateTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `resume`<sup>Required</sup> <a name="resume" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resume"></a>

```typescript
public readonly resume: string;
```

- *Type:* string

---

##### `resumeTimeoutInSeconds`<sup>Required</sup> <a name="resumeTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.resumeTimeoutInSeconds"></a>

```typescript
public readonly resumeTimeoutInSeconds: number;
```

- *Type:* number

---

##### `run`<sup>Required</sup> <a name="run" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.run"></a>

```typescript
public readonly run: string;
```

- *Type:* string

---

##### `runTimeoutInSeconds`<sup>Required</sup> <a name="runTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.runTimeoutInSeconds"></a>

```typescript
public readonly runTimeoutInSeconds: number;
```

- *Type:* number

---

##### `suspend`<sup>Required</sup> <a name="suspend" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspend"></a>

```typescript
public readonly suspend: string;
```

- *Type:* string

---

##### `suspendTimeoutInSeconds`<sup>Required</sup> <a name="suspendTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.suspendTimeoutInSeconds"></a>

```typescript
public readonly suspendTimeoutInSeconds: number;
```

- *Type:* number

---

##### `terminate`<sup>Required</sup> <a name="terminate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminate"></a>

```typescript
public readonly terminate: string;
```

- *Type:* string

---

##### `terminateTimeoutInSeconds`<sup>Required</sup> <a name="terminateTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.terminateTimeoutInSeconds"></a>

```typescript
public readonly terminateTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready">ready</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds">readyTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate">validate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds">validateTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `ready`<sup>Required</sup> <a name="ready" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.ready"></a>

```typescript
public readonly ready: string;
```

- *Type:* string

---

##### `readyTimeoutInSeconds`<sup>Required</sup> <a name="readyTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.readyTimeoutInSeconds"></a>

```typescript
public readonly readyTimeoutInSeconds: number;
```

- *Type:* number

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validate"></a>

```typescript
public readonly validate: string;
```

- *Type:* string

---

##### `validateTimeoutInSeconds`<sup>Required</sup> <a name="validateTimeoutInSeconds" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.validateTimeoutInSeconds"></a>

```typescript
public readonly validateTimeoutInSeconds: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooks</a>

---


### DataAwsLambdamicrovmsImageVersionHooksOutputReference <a name="DataAwsLambdamicrovmsImageVersionHooksOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks">microvmHooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks">microvmImageHooks</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `microvmHooks`<sup>Required</sup> <a name="microvmHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmHooks"></a>

```typescript
public readonly microvmHooks: DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmHooksList</a>

---

##### `microvmImageHooks`<sup>Required</sup> <a name="microvmImageHooks" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.microvmImageHooks"></a>

```typescript
public readonly microvmImageHooks: DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList">DataAwsLambdamicrovmsImageVersionHooksMicrovmImageHooksList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooksOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionHooks;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionHooks">DataAwsLambdamicrovmsImageVersionHooks</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup">logGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream">logStream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logGroup`<sup>Required</sup> <a name="logGroup" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logGroup"></a>

```typescript
public readonly logGroup: string;
```

- *Type:* string

---

##### `logStream`<sup>Required</sup> <a name="logStream" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.logStream"></a>

```typescript
public readonly logStream: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionLoggingCloudwatch;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatch">DataAwsLambdamicrovmsImageVersionLoggingCloudwatch</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledList <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionLoggingDisabled;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabled">DataAwsLambdamicrovmsImageVersionLoggingDisabled</a>

---


### DataAwsLambdamicrovmsImageVersionLoggingList <a name="DataAwsLambdamicrovmsImageVersionLoggingList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionLoggingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionLoggingOutputReference <a name="DataAwsLambdamicrovmsImageVersionLoggingOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch">cloudwatch</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled">disabled</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudwatch`<sup>Required</sup> <a name="cloudwatch" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.cloudwatch"></a>

```typescript
public readonly cloudwatch: DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList">DataAwsLambdamicrovmsImageVersionLoggingCloudwatchList</a>

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.disabled"></a>

```typescript
public readonly disabled: DataAwsLambdamicrovmsImageVersionLoggingDisabledList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingDisabledList">DataAwsLambdamicrovmsImageVersionLoggingDisabledList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLoggingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionLogging;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionLogging">DataAwsLambdamicrovmsImageVersionLogging</a>

---


### DataAwsLambdamicrovmsImageVersionResourcesList <a name="DataAwsLambdamicrovmsImageVersionResourcesList" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get"></a>

```typescript
public get(index: number): DataAwsLambdamicrovmsImageVersionResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsLambdamicrovmsImageVersionResourcesOutputReference <a name="DataAwsLambdamicrovmsImageVersionResourcesOutputReference" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer"></a>

```typescript
import { dataAwsLambdamicrovmsImageVersion } from '@cdktn/provider-aws'

new dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib">minimumMemoryInMib</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `minimumMemoryInMib`<sup>Required</sup> <a name="minimumMemoryInMib" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.minimumMemoryInMib"></a>

```typescript
public readonly minimumMemoryInMib: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsLambdamicrovmsImageVersionResources;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsLambdamicrovmsImageVersion.DataAwsLambdamicrovmsImageVersionResources">DataAwsLambdamicrovmsImageVersionResources</a>

---



