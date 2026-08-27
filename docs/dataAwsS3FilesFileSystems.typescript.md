# `dataAwsS3FilesFileSystems` Submodule <a name="`dataAwsS3FilesFileSystems` Submodule" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsS3FilesFileSystems <a name="DataAwsS3FilesFileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3files_file_systems aws_s3files_file_systems}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

new dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems(scope: Construct, id: string, config?: DataAwsS3FilesFileSystemsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig">DataAwsS3FilesFileSystemsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig">DataAwsS3FilesFileSystemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.putFileSystems">putFileSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetFileSystems">resetFileSystems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFileSystems` <a name="putFileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.putFileSystems"></a>

```typescript
public putFileSystems(value: IResolvable | DataAwsS3FilesFileSystemsFileSystems[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.putFileSystems.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>[]

---

##### `resetFileSystems` <a name="resetFileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetFileSystems"></a>

```typescript
public resetFileSystems(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsS3FilesFileSystems resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isConstruct"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformElement"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformDataSource"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsS3FilesFileSystems resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsS3FilesFileSystems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsS3FilesFileSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3files_file_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsS3FilesFileSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fileSystems">fileSystems</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList">DataAwsS3FilesFileSystemsFileSystemsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fileSystemsInput">fileSystemsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `fileSystems`<sup>Required</sup> <a name="fileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fileSystems"></a>

```typescript
public readonly fileSystems: DataAwsS3FilesFileSystemsFileSystemsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList">DataAwsS3FilesFileSystemsFileSystemsList</a>

---

##### `fileSystemsInput`<sup>Optional</sup> <a name="fileSystemsInput" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.fileSystemsInput"></a>

```typescript
public readonly fileSystemsInput: IResolvable | DataAwsS3FilesFileSystemsFileSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystems.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsS3FilesFileSystemsConfig <a name="DataAwsS3FilesFileSystemsConfig" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.Initializer"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

const dataAwsS3FilesFileSystemsConfig: dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.fileSystems">fileSystems</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>[]</code> | file_systems block. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `fileSystems`<sup>Optional</sup> <a name="fileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.fileSystems"></a>

```typescript
public readonly fileSystems: IResolvable | DataAwsS3FilesFileSystemsFileSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>[]

file_systems block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3files_file_systems#file_systems DataAwsS3FilesFileSystems#file_systems}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/data-sources/s3files_file_systems#region DataAwsS3FilesFileSystems#region}

---

### DataAwsS3FilesFileSystemsFileSystems <a name="DataAwsS3FilesFileSystemsFileSystems" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems.Initializer"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

const dataAwsS3FilesFileSystemsFileSystems: dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsS3FilesFileSystemsFileSystemsList <a name="DataAwsS3FilesFileSystemsFileSystemsList" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

new dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.get"></a>

```typescript
public get(index: number): DataAwsS3FilesFileSystemsFileSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsS3FilesFileSystemsFileSystems[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>[]

---


### DataAwsS3FilesFileSystemsFileSystemsOutputReference <a name="DataAwsS3FilesFileSystemsFileSystemsOutputReference" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer"></a>

```typescript
import { dataAwsS3FilesFileSystems } from '@cdktn/provider-aws'

new dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystemsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsS3FilesFileSystemsFileSystems;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.dataAwsS3FilesFileSystems.DataAwsS3FilesFileSystemsFileSystems">DataAwsS3FilesFileSystemsFileSystems</a>

---



