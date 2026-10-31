# `dataAwsSagemakerHubContent` Submodule <a name="`dataAwsSagemakerHubContent` Submodule" id="@cdktn/provider-aws.dataAwsSagemakerHubContent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsSagemakerHubContent <a name="DataAwsSagemakerHubContent" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content aws_sagemaker_hub_content}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

new dataAwsSagemakerHubContent.DataAwsSagemakerHubContent(scope: Construct, id: string, config: DataAwsSagemakerHubContentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig">DataAwsSagemakerHubContentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig">DataAwsSagemakerHubContentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion">resetHubContentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetHubContentVersion` <a name="resetHubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetHubContentVersion"></a>

```typescript
public resetHubContentVersion(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataAwsSagemakerHubContent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsSagemakerHubContent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsSagemakerHubContent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsSagemakerHubContent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime">creationTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion">documentSchemaVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason">failureReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn">hubArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn">hubContentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency">hubContentDependency</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription">hubContentDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName">hubContentDisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument">hubContentDocument</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown">hubContentMarkdown</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords">hubContentSearchKeywords</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus">hubContentStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime">lastModifiedTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion">referenceMinVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn">sagemakerPublicHubContentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus">supportStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn">versionedHubContentArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput">hubContentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput">hubContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput">hubContentVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput">hubNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName">hubContentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType">hubContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion">hubContentVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName">hubName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTime`<sup>Required</sup> <a name="creationTime" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.creationTime"></a>

```typescript
public readonly creationTime: string;
```

- *Type:* string

---

##### `documentSchemaVersion`<sup>Required</sup> <a name="documentSchemaVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.documentSchemaVersion"></a>

```typescript
public readonly documentSchemaVersion: string;
```

- *Type:* string

---

##### `failureReason`<sup>Required</sup> <a name="failureReason" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.failureReason"></a>

```typescript
public readonly failureReason: string;
```

- *Type:* string

---

##### `hubArn`<sup>Required</sup> <a name="hubArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubArn"></a>

```typescript
public readonly hubArn: string;
```

- *Type:* string

---

##### `hubContentArn`<sup>Required</sup> <a name="hubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentArn"></a>

```typescript
public readonly hubContentArn: string;
```

- *Type:* string

---

##### `hubContentDependency`<sup>Required</sup> <a name="hubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDependency"></a>

```typescript
public readonly hubContentDependency: DataAwsSagemakerHubContentHubContentDependencyList;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList">DataAwsSagemakerHubContentHubContentDependencyList</a>

---

##### `hubContentDescription`<sup>Required</sup> <a name="hubContentDescription" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDescription"></a>

```typescript
public readonly hubContentDescription: string;
```

- *Type:* string

---

##### `hubContentDisplayName`<sup>Required</sup> <a name="hubContentDisplayName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDisplayName"></a>

```typescript
public readonly hubContentDisplayName: string;
```

- *Type:* string

---

##### `hubContentDocument`<sup>Required</sup> <a name="hubContentDocument" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentDocument"></a>

```typescript
public readonly hubContentDocument: string;
```

- *Type:* string

---

##### `hubContentMarkdown`<sup>Required</sup> <a name="hubContentMarkdown" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentMarkdown"></a>

```typescript
public readonly hubContentMarkdown: string;
```

- *Type:* string

---

##### `hubContentSearchKeywords`<sup>Required</sup> <a name="hubContentSearchKeywords" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentSearchKeywords"></a>

```typescript
public readonly hubContentSearchKeywords: string[];
```

- *Type:* string[]

---

##### `hubContentStatus`<sup>Required</sup> <a name="hubContentStatus" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentStatus"></a>

```typescript
public readonly hubContentStatus: string;
```

- *Type:* string

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.lastModifiedTime"></a>

```typescript
public readonly lastModifiedTime: string;
```

- *Type:* string

---

##### `referenceMinVersion`<sup>Required</sup> <a name="referenceMinVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.referenceMinVersion"></a>

```typescript
public readonly referenceMinVersion: string;
```

- *Type:* string

---

##### `sagemakerPublicHubContentArn`<sup>Required</sup> <a name="sagemakerPublicHubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.sagemakerPublicHubContentArn"></a>

```typescript
public readonly sagemakerPublicHubContentArn: string;
```

- *Type:* string

---

##### `supportStatus`<sup>Required</sup> <a name="supportStatus" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.supportStatus"></a>

```typescript
public readonly supportStatus: string;
```

- *Type:* string

---

##### `versionedHubContentArn`<sup>Required</sup> <a name="versionedHubContentArn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.versionedHubContentArn"></a>

```typescript
public readonly versionedHubContentArn: string;
```

- *Type:* string

---

##### `hubContentNameInput`<sup>Optional</sup> <a name="hubContentNameInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentNameInput"></a>

```typescript
public readonly hubContentNameInput: string;
```

- *Type:* string

---

##### `hubContentTypeInput`<sup>Optional</sup> <a name="hubContentTypeInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentTypeInput"></a>

```typescript
public readonly hubContentTypeInput: string;
```

- *Type:* string

---

##### `hubContentVersionInput`<sup>Optional</sup> <a name="hubContentVersionInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersionInput"></a>

```typescript
public readonly hubContentVersionInput: string;
```

- *Type:* string

---

##### `hubNameInput`<sup>Optional</sup> <a name="hubNameInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubNameInput"></a>

```typescript
public readonly hubNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `hubContentName`<sup>Required</sup> <a name="hubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentName"></a>

```typescript
public readonly hubContentName: string;
```

- *Type:* string

---

##### `hubContentType`<sup>Required</sup> <a name="hubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentType"></a>

```typescript
public readonly hubContentType: string;
```

- *Type:* string

---

##### `hubContentVersion`<sup>Required</sup> <a name="hubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubContentVersion"></a>

```typescript
public readonly hubContentVersion: string;
```

- *Type:* string

---

##### `hubName`<sup>Required</sup> <a name="hubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.hubName"></a>

```typescript
public readonly hubName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsSagemakerHubContentConfig <a name="DataAwsSagemakerHubContentConfig" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.Initializer"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

const dataAwsSagemakerHubContentConfig: dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName">hubContentName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType">hubContentType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName">hubName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion">hubContentVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `hubContentName`<sup>Required</sup> <a name="hubContentName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentName"></a>

```typescript
public readonly hubContentName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_name DataAwsSagemakerHubContent#hub_content_name}.

---

##### `hubContentType`<sup>Required</sup> <a name="hubContentType" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentType"></a>

```typescript
public readonly hubContentType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_type DataAwsSagemakerHubContent#hub_content_type}.

---

##### `hubName`<sup>Required</sup> <a name="hubName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubName"></a>

```typescript
public readonly hubName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_name DataAwsSagemakerHubContent#hub_name}.

---

##### `hubContentVersion`<sup>Optional</sup> <a name="hubContentVersion" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.hubContentVersion"></a>

```typescript
public readonly hubContentVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#hub_content_version DataAwsSagemakerHubContent#hub_content_version}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.71.0/docs/data-sources/sagemaker_hub_content#region DataAwsSagemakerHubContent#region}

---

### DataAwsSagemakerHubContentHubContentDependency <a name="DataAwsSagemakerHubContentHubContentDependency" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency.Initializer"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

const dataAwsSagemakerHubContentHubContentDependency: dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsSagemakerHubContentHubContentDependencyList <a name="DataAwsSagemakerHubContentHubContentDependencyList" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

new dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get"></a>

```typescript
public get(index: number): DataAwsSagemakerHubContentHubContentDependencyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataAwsSagemakerHubContentHubContentDependencyOutputReference <a name="DataAwsSagemakerHubContentHubContentDependencyOutputReference" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer"></a>

```typescript
import { dataAwsSagemakerHubContent } from '@cdktn/provider-aws'

new dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath">dependencyCopyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath">dependencyOriginPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dependencyCopyPath`<sup>Required</sup> <a name="dependencyCopyPath" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyCopyPath"></a>

```typescript
public readonly dependencyCopyPath: string;
```

- *Type:* string

---

##### `dependencyOriginPath`<sup>Required</sup> <a name="dependencyOriginPath" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.dependencyOriginPath"></a>

```typescript
public readonly dependencyOriginPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependencyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataAwsSagemakerHubContentHubContentDependency;
```

- *Type:* <a href="#@cdktn/provider-aws.dataAwsSagemakerHubContent.DataAwsSagemakerHubContentHubContentDependency">DataAwsSagemakerHubContentHubContentDependency</a>

---



