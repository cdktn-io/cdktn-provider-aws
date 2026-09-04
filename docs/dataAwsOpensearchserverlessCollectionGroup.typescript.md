# `dataAwsOpensearchserverlessCollectionGroup` Submodule <a name="`dataAwsOpensearchserverlessCollectionGroup` Submodule" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsOpensearchserverlessCollectionGroup <a name="DataAwsOpensearchserverlessCollectionGroup" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_group aws_opensearchserverless_collection_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

new dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup(scope: Construct, id: string, config?: DataAwsOpensearchserverlessCollectionGroupConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig">DataAwsOpensearchserverlessCollectionGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig">DataAwsOpensearchserverlessCollectionGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetName"></a>

```typescript
public resetName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isConstruct"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformElement"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformDataSource"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsOpensearchserverlessCollectionGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsOpensearchserverlessCollectionGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsOpensearchserverlessCollectionGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsOpensearchserverlessCollectionGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.capacityLimits">capacityLimits</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.createdDate">createdDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.generation">generation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.standbyReplicas">standbyReplicas</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.tags">tags</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `capacityLimits`<sup>Required</sup> <a name="capacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.capacityLimits"></a>

```typescript
public readonly capacityLimits: DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList">DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList</a>

---

##### `createdDate`<sup>Required</sup> <a name="createdDate" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.createdDate"></a>

```typescript
public readonly createdDate: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `generation`<sup>Required</sup> <a name="generation" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.generation"></a>

```typescript
public readonly generation: string;
```

- *Type:* string

---

##### `standbyReplicas`<sup>Required</sup> <a name="standbyReplicas" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.standbyReplicas"></a>

```typescript
public readonly standbyReplicas: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.tags"></a>

```typescript
public readonly tags: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroup.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsOpensearchserverlessCollectionGroupCapacityLimits <a name="DataAwsOpensearchserverlessCollectionGroupCapacityLimits" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

const dataAwsOpensearchserverlessCollectionGroupCapacityLimits: dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits = { ... }
```


### DataAwsOpensearchserverlessCollectionGroupConfig <a name="DataAwsOpensearchserverlessCollectionGroupConfig" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

const dataAwsOpensearchserverlessCollectionGroupConfig: dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.id">id</a></code> | <code>string</code> | ID of the collection group. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.name">name</a></code> | <code>string</code> | Name of the collection group. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

ID of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_group#id DataAwsOpensearchserverlessCollectionGroup#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the collection group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_group#name DataAwsOpensearchserverlessCollectionGroup#name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/data-sources/opensearchserverless_collection_group#region DataAwsOpensearchserverlessCollectionGroup#region}

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList <a name="DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

new dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.get"></a>

```typescript
public get(index: number): DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference <a name="DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer"></a>

```typescript
import { dataAwsOpensearchserverlessCollectionGroup } from '@cdktn/provider-aws'

new dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu">maxIndexingCapacityInOcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu">maxSearchCapacityInOcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu">minIndexingCapacityInOcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu">minSearchCapacityInOcu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits">DataAwsOpensearchserverlessCollectionGroupCapacityLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `maxIndexingCapacityInOcu`<sup>Required</sup> <a name="maxIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxIndexingCapacityInOcu"></a>

```typescript
public readonly maxIndexingCapacityInOcu: number;
```

- *Type:* number

---

##### `maxSearchCapacityInOcu`<sup>Required</sup> <a name="maxSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.maxSearchCapacityInOcu"></a>

```typescript
public readonly maxSearchCapacityInOcu: number;
```

- *Type:* number

---

##### `minIndexingCapacityInOcu`<sup>Required</sup> <a name="minIndexingCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minIndexingCapacityInOcu"></a>

```typescript
public readonly minIndexingCapacityInOcu: number;
```

- *Type:* number

---

##### `minSearchCapacityInOcu`<sup>Required</sup> <a name="minSearchCapacityInOcu" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.minSearchCapacityInOcu"></a>

```typescript
public readonly minSearchCapacityInOcu: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimitsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsOpensearchserverlessCollectionGroupCapacityLimits;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsOpensearchserverlessCollectionGroup.DataAwsOpensearchserverlessCollectionGroupCapacityLimits">DataAwsOpensearchserverlessCollectionGroupCapacityLimits</a>

---



