# `dataAwsResiliencehubv2Service` Submodule <a name="`dataAwsResiliencehubv2Service` Submodule" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsResiliencehubv2Service <a name="DataAwsResiliencehubv2Service" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service aws_resiliencehubv2_service}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service(scope: Construct, id: string, config: DataAwsResiliencehubv2ServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig">DataAwsResiliencehubv2ServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig">DataAwsResiliencehubv2ServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsResiliencehubv2Service resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isConstruct"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformElement"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformDataSource"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsResiliencehubv2Service resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsResiliencehubv2Service to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsResiliencehubv2Service that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsResiliencehubv2Service to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.associatedSystem">associatedSystem</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList">DataAwsResiliencehubv2ServiceAssociatedSystemList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.kmsKeyId">kmsKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.permissionModel">permissionModel</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList">DataAwsResiliencehubv2ServicePermissionModelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.policyArn">policyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.regions">regions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `associatedSystem`<sup>Required</sup> <a name="associatedSystem" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.associatedSystem"></a>

```typescript
public readonly associatedSystem: DataAwsResiliencehubv2ServiceAssociatedSystemList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList">DataAwsResiliencehubv2ServiceAssociatedSystemList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.kmsKeyId"></a>

```typescript
public readonly kmsKeyId: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `permissionModel`<sup>Required</sup> <a name="permissionModel" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.permissionModel"></a>

```typescript
public readonly permissionModel: DataAwsResiliencehubv2ServicePermissionModelList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList">DataAwsResiliencehubv2ServicePermissionModelList</a>

---

##### `policyArn`<sup>Required</sup> <a name="policyArn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.policyArn"></a>

```typescript
public readonly policyArn: string;
```

- *Type:* string

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.regions"></a>

```typescript
public readonly regions: string[];
```

- *Type:* string[]

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2Service.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsResiliencehubv2ServiceAssociatedSystem <a name="DataAwsResiliencehubv2ServiceAssociatedSystem" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2ServiceAssociatedSystem: dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem = { ... }
```


### DataAwsResiliencehubv2ServiceConfig <a name="DataAwsResiliencehubv2ServiceConfig" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2ServiceConfig: dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#arn DataAwsResiliencehubv2Service#arn}. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#arn DataAwsResiliencehubv2Service#arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/data-sources/resiliencehubv2_service#region DataAwsResiliencehubv2Service#region}

---

### DataAwsResiliencehubv2ServicePermissionModel <a name="DataAwsResiliencehubv2ServicePermissionModel" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2ServicePermissionModel: dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel = { ... }
```


### DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole <a name="DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

const dataAwsResiliencehubv2ServicePermissionModelCrossAccountRole: dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsResiliencehubv2ServiceAssociatedSystemList <a name="DataAwsResiliencehubv2ServiceAssociatedSystemList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.get"></a>

```typescript
public get(index: number): DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference <a name="DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArn">systemArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem">DataAwsResiliencehubv2ServiceAssociatedSystem</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `systemArn`<sup>Required</sup> <a name="systemArn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.systemArn"></a>

```typescript
public readonly systemArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystemOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResiliencehubv2ServiceAssociatedSystem;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServiceAssociatedSystem">DataAwsResiliencehubv2ServiceAssociatedSystem</a>

---


### DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList <a name="DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.get"></a>

```typescript
public get(index: number): DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference <a name="DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn">crossAccountRoleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId">externalId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole">DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRoleArn`<sup>Required</sup> <a name="crossAccountRoleArn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.crossAccountRoleArn"></a>

```typescript
public readonly crossAccountRoleArn: string;
```

- *Type:* string

---

##### `externalId`<sup>Required</sup> <a name="externalId" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.externalId"></a>

```typescript
public readonly externalId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole">DataAwsResiliencehubv2ServicePermissionModelCrossAccountRole</a>

---


### DataAwsResiliencehubv2ServicePermissionModelList <a name="DataAwsResiliencehubv2ServicePermissionModelList" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.get"></a>

```typescript
public get(index: number): DataAwsResiliencehubv2ServicePermissionModelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsResiliencehubv2ServicePermissionModelOutputReference <a name="DataAwsResiliencehubv2ServicePermissionModelOutputReference" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer"></a>

```typescript
import { dataAwsResiliencehubv2Service } from '@cdktn/provider-aws'

new dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole">crossAccountRole</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList">DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName">invokerRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel">DataAwsResiliencehubv2ServicePermissionModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `crossAccountRole`<sup>Required</sup> <a name="crossAccountRole" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.crossAccountRole"></a>

```typescript
public readonly crossAccountRole: DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList">DataAwsResiliencehubv2ServicePermissionModelCrossAccountRoleList</a>

---

##### `invokerRoleName`<sup>Required</sup> <a name="invokerRoleName" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.invokerRoleName"></a>

```typescript
public readonly invokerRoleName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModelOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsResiliencehubv2ServicePermissionModel;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsResiliencehubv2Service.DataAwsResiliencehubv2ServicePermissionModel">DataAwsResiliencehubv2ServicePermissionModel</a>

---



