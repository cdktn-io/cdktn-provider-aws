# `dataAwsGlueCatalog` Submodule <a name="`dataAwsGlueCatalog` Submodule" id="@cdktn/provider-aws.dataAwsGlueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsGlueCatalog <a name="DataAwsGlueCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_catalog aws_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalog(scope: Construct, id: string, config: DataAwsGlueCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig">DataAwsGlueCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig">DataAwsGlueCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsGlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsGlueCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsGlueCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsGlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsGlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogProperties">catalogProperties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList">DataAwsGlueCatalogCatalogPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList">DataAwsGlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.federatedCatalog">federatedCatalog</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList">DataAwsGlueCatalogFederatedCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.parameters">parameters</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.targetRedshiftCatalog">targetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList">DataAwsGlueCatalogTargetRedshiftCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allowFullTableExternalDataAccess`<sup>Required</sup> <a name="allowFullTableExternalDataAccess" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.allowFullTableExternalDataAccess"></a>

```typescript
public readonly allowFullTableExternalDataAccess: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `catalogProperties`<sup>Required</sup> <a name="catalogProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.catalogProperties"></a>

```typescript
public readonly catalogProperties: DataAwsGlueCatalogCatalogPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList">DataAwsGlueCatalogCatalogPropertiesList</a>

---

##### `createDatabaseDefaultPermissions`<sup>Required</sup> <a name="createDatabaseDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createDatabaseDefaultPermissions"></a>

```typescript
public readonly createDatabaseDefaultPermissions: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: DataAwsGlueCatalogCreateTableDefaultPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList">DataAwsGlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `federatedCatalog`<sup>Required</sup> <a name="federatedCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.federatedCatalog"></a>

```typescript
public readonly federatedCatalog: DataAwsGlueCatalogFederatedCatalogList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList">DataAwsGlueCatalogFederatedCatalogList</a>

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.parameters"></a>

```typescript
public readonly parameters: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `targetRedshiftCatalog`<sup>Required</sup> <a name="targetRedshiftCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.targetRedshiftCatalog"></a>

```typescript
public readonly targetRedshiftCatalog: DataAwsGlueCatalogTargetRedshiftCatalogList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList">DataAwsGlueCatalogTargetRedshiftCatalogList</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsGlueCatalogCatalogProperties <a name="DataAwsGlueCatalogCatalogProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogCatalogProperties: dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties = { ... }
```


### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties: dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties = { ... }
```


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties: dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties = { ... }
```


### DataAwsGlueCatalogConfig <a name="DataAwsGlueCatalogConfig" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogConfig: dataAwsGlueCatalog.DataAwsGlueCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_catalog#name DataAwsGlueCatalog#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.50.0/docs/data-sources/glue_catalog#region DataAwsGlueCatalog#region}

---

### DataAwsGlueCatalogCreateDatabaseDefaultPermissions <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogCreateDatabaseDefaultPermissions: dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions = { ... }
```


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal: dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal = { ... }
```


### DataAwsGlueCatalogCreateTableDefaultPermissions <a name="DataAwsGlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogCreateTableDefaultPermissions: dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions = { ... }
```


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal: dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal = { ... }
```


### DataAwsGlueCatalogFederatedCatalog <a name="DataAwsGlueCatalogFederatedCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogFederatedCatalog: dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog = { ... }
```


### DataAwsGlueCatalogTargetRedshiftCatalog <a name="DataAwsGlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

const dataAwsGlueCatalogTargetRedshiftCatalog: dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">catalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">dataLakeAccess</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">dataTransferRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">managedWorkgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">managedWorkgroupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">redshiftDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

---

##### `dataLakeAccess`<sup>Required</sup> <a name="dataLakeAccess" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```typescript
public readonly dataLakeAccess: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `dataTransferRole`<sup>Required</sup> <a name="dataTransferRole" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```typescript
public readonly dataTransferRole: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `managedWorkgroupName`<sup>Required</sup> <a name="managedWorkgroupName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```typescript
public readonly managedWorkgroupName: string;
```

- *Type:* string

---

##### `managedWorkgroupStatus`<sup>Required</sup> <a name="managedWorkgroupStatus" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```typescript
public readonly managedWorkgroupStatus: string;
```

- *Type:* string

---

##### `redshiftDatabaseName`<sup>Required</sup> <a name="redshiftDatabaseName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```typescript
public readonly redshiftDatabaseName: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction">compaction</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion">orphanFileDeletion</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention">retention</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compaction`<sup>Required</sup> <a name="compaction" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction"></a>

```typescript
public readonly compaction: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `orphanFileDeletion`<sup>Required</sup> <a name="orphanFileDeletion" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion"></a>

```typescript
public readonly orphanFileDeletion: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention"></a>

```typescript
public readonly retention: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>

---


### DataAwsGlueCatalogCatalogPropertiesList <a name="DataAwsGlueCatalogCatalogPropertiesList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogCatalogPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogCatalogPropertiesOutputReference <a name="DataAwsGlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.customProperties">customProperties</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">dataLakeAccessProperties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties">icebergOptimizationProperties</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties">DataAwsGlueCatalogCatalogProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `customProperties`<sup>Required</sup> <a name="customProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```typescript
public readonly customProperties: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `dataLakeAccessProperties`<sup>Required</sup> <a name="dataLakeAccessProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```typescript
public readonly dataLakeAccessProperties: DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">DataAwsGlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a>

---

##### `icebergOptimizationProperties`<sup>Required</sup> <a name="icebergOptimizationProperties" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties"></a>

```typescript
public readonly icebergOptimizationProperties: DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">DataAwsGlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogCatalogProperties;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCatalogProperties">DataAwsGlueCatalogCatalogProperties</a>

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions">DataAwsGlueCatalogCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogCreateDatabaseDefaultPermissions;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissions">DataAwsGlueCatalogCreateDatabaseDefaultPermissions</a>

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsList <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions">DataAwsGlueCatalogCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogCreateTableDefaultPermissions;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissions">DataAwsGlueCatalogCreateTableDefaultPermissions</a>

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal">DataAwsGlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---


### DataAwsGlueCatalogFederatedCatalogList <a name="DataAwsGlueCatalogFederatedCatalogList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogFederatedCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogFederatedCatalogOutputReference <a name="DataAwsGlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog">DataAwsGlueCatalogFederatedCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogFederatedCatalog;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogFederatedCatalog">DataAwsGlueCatalogFederatedCatalog</a>

---


### DataAwsGlueCatalogTargetRedshiftCatalogList <a name="DataAwsGlueCatalogTargetRedshiftCatalogList" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get"></a>

```typescript
public get(index: number): DataAwsGlueCatalogTargetRedshiftCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsGlueCatalogTargetRedshiftCatalogOutputReference <a name="DataAwsGlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```typescript
import { dataAwsGlueCatalog } from '@cdktn/provider-aws'

new dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">catalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog">DataAwsGlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogArn`<sup>Required</sup> <a name="catalogArn" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```typescript
public readonly catalogArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsGlueCatalogTargetRedshiftCatalog;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsGlueCatalog.DataAwsGlueCatalogTargetRedshiftCatalog">DataAwsGlueCatalogTargetRedshiftCatalog</a>

---



