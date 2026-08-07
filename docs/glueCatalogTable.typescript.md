# `glueCatalogTable` Submodule <a name="`glueCatalogTable` Submodule" id="@cdktn/provider-aws.glueCatalogTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalogTable <a name="GlueCatalogTable" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table aws_glue_catalog_table}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTable(scope: Construct, id: string, config: GlueCatalogTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig">GlueCatalogTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig">GlueCatalogTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putOpenTableFormatInput">putOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex">putPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys">putPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor">putStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable">putTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putViewDefinition">putViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId">resetCatalogId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetOpenTableFormatInput">resetOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner">resetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex">resetPartitionIndex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys">resetPartitionKeys</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention">resetRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor">resetStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType">resetTableType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable">resetTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewDefinition">resetViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText">resetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText">resetViewOriginalText</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOpenTableFormatInput` <a name="putOpenTableFormatInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putOpenTableFormatInput"></a>

```typescript
public putOpenTableFormatInput(value: GlueCatalogTableOpenTableFormatInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putOpenTableFormatInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a>

---

##### `putPartitionIndex` <a name="putPartitionIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex"></a>

```typescript
public putPartitionIndex(value: IResolvable | GlueCatalogTablePartitionIndex[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionIndex.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]

---

##### `putPartitionKeys` <a name="putPartitionKeys" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys"></a>

```typescript
public putPartitionKeys(value: IResolvable | GlueCatalogTablePartitionKeys[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putPartitionKeys.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]

---

##### `putStorageDescriptor` <a name="putStorageDescriptor" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor"></a>

```typescript
public putStorageDescriptor(value: GlueCatalogTableStorageDescriptor): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putStorageDescriptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `putTargetTable` <a name="putTargetTable" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable"></a>

```typescript
public putTargetTable(value: GlueCatalogTableTargetTable): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putTargetTable.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `putViewDefinition` <a name="putViewDefinition" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putViewDefinition"></a>

```typescript
public putViewDefinition(value: GlueCatalogTableViewDefinition): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.putViewDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition">GlueCatalogTableViewDefinition</a>

---

##### `resetCatalogId` <a name="resetCatalogId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetCatalogId"></a>

```typescript
public resetCatalogId(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOpenTableFormatInput` <a name="resetOpenTableFormatInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetOpenTableFormatInput"></a>

```typescript
public resetOpenTableFormatInput(): void
```

##### `resetOwner` <a name="resetOwner" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetOwner"></a>

```typescript
public resetOwner(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetPartitionIndex` <a name="resetPartitionIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionIndex"></a>

```typescript
public resetPartitionIndex(): void
```

##### `resetPartitionKeys` <a name="resetPartitionKeys" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetPartitionKeys"></a>

```typescript
public resetPartitionKeys(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRetention` <a name="resetRetention" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetRetention"></a>

```typescript
public resetRetention(): void
```

##### `resetStorageDescriptor` <a name="resetStorageDescriptor" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetStorageDescriptor"></a>

```typescript
public resetStorageDescriptor(): void
```

##### `resetTableType` <a name="resetTableType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetTableType"></a>

```typescript
public resetTableType(): void
```

##### `resetTargetTable` <a name="resetTargetTable" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetTargetTable"></a>

```typescript
public resetTargetTable(): void
```

##### `resetViewDefinition` <a name="resetViewDefinition" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewDefinition"></a>

```typescript
public resetViewDefinition(): void
```

##### `resetViewExpandedText` <a name="resetViewExpandedText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewExpandedText"></a>

```typescript
public resetViewExpandedText(): void
```

##### `resetViewOriginalText` <a name="resetViewOriginalText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.resetViewOriginalText"></a>

```typescript
public resetViewOriginalText(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueCatalogTable resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

glueCatalogTable.GlueCatalogTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

glueCatalogTable.GlueCatalogTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

glueCatalogTable.GlueCatalogTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

glueCatalogTable.GlueCatalogTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueCatalogTable resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueCatalogTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueCatalogTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueCatalogTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.openTableFormatInput">openTableFormatInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference">GlueCatalogTableOpenTableFormatInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex">partitionIndex</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys">partitionKeys</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewDefinition">viewDefinition</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference">GlueCatalogTableViewDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.openTableFormatInputInput">openTableFormatInputInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput">ownerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput">partitionIndexInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput">partitionKeysInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput">retentionInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput">storageDescriptorInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput">tableTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput">targetTableInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewDefinitionInput">viewDefinitionInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition">GlueCatalogTableViewDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput">viewExpandedTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput">viewOriginalTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention">retention</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType">tableType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText">viewExpandedText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText">viewOriginalText</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `openTableFormatInput`<sup>Required</sup> <a name="openTableFormatInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.openTableFormatInput"></a>

```typescript
public readonly openTableFormatInput: GlueCatalogTableOpenTableFormatInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference">GlueCatalogTableOpenTableFormatInputOutputReference</a>

---

##### `partitionIndex`<sup>Required</sup> <a name="partitionIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndex"></a>

```typescript
public readonly partitionIndex: GlueCatalogTablePartitionIndexList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList">GlueCatalogTablePartitionIndexList</a>

---

##### `partitionKeys`<sup>Required</sup> <a name="partitionKeys" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeys"></a>

```typescript
public readonly partitionKeys: GlueCatalogTablePartitionKeysList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList">GlueCatalogTablePartitionKeysList</a>

---

##### `storageDescriptor`<sup>Required</sup> <a name="storageDescriptor" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: GlueCatalogTableStorageDescriptorOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference">GlueCatalogTableStorageDescriptorOutputReference</a>

---

##### `targetTable`<sup>Required</sup> <a name="targetTable" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTable"></a>

```typescript
public readonly targetTable: GlueCatalogTableTargetTableOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference">GlueCatalogTableTargetTableOutputReference</a>

---

##### `viewDefinition`<sup>Required</sup> <a name="viewDefinition" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewDefinition"></a>

```typescript
public readonly viewDefinition: GlueCatalogTableViewDefinitionOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference">GlueCatalogTableViewDefinitionOutputReference</a>

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `openTableFormatInputInput`<sup>Optional</sup> <a name="openTableFormatInputInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.openTableFormatInputInput"></a>

```typescript
public readonly openTableFormatInputInput: GlueCatalogTableOpenTableFormatInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a>

---

##### `ownerInput`<sup>Optional</sup> <a name="ownerInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.ownerInput"></a>

```typescript
public readonly ownerInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `partitionIndexInput`<sup>Optional</sup> <a name="partitionIndexInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionIndexInput"></a>

```typescript
public readonly partitionIndexInput: IResolvable | GlueCatalogTablePartitionIndex[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]

---

##### `partitionKeysInput`<sup>Optional</sup> <a name="partitionKeysInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.partitionKeysInput"></a>

```typescript
public readonly partitionKeysInput: IResolvable | GlueCatalogTablePartitionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.retentionInput"></a>

```typescript
public readonly retentionInput: number;
```

- *Type:* number

---

##### `storageDescriptorInput`<sup>Optional</sup> <a name="storageDescriptorInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.storageDescriptorInput"></a>

```typescript
public readonly storageDescriptorInput: GlueCatalogTableStorageDescriptor;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---

##### `tableTypeInput`<sup>Optional</sup> <a name="tableTypeInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableTypeInput"></a>

```typescript
public readonly tableTypeInput: string;
```

- *Type:* string

---

##### `targetTableInput`<sup>Optional</sup> <a name="targetTableInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.targetTableInput"></a>

```typescript
public readonly targetTableInput: GlueCatalogTableTargetTable;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---

##### `viewDefinitionInput`<sup>Optional</sup> <a name="viewDefinitionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewDefinitionInput"></a>

```typescript
public readonly viewDefinitionInput: GlueCatalogTableViewDefinition;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition">GlueCatalogTableViewDefinition</a>

---

##### `viewExpandedTextInput`<sup>Optional</sup> <a name="viewExpandedTextInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedTextInput"></a>

```typescript
public readonly viewExpandedTextInput: string;
```

- *Type:* string

---

##### `viewOriginalTextInput`<sup>Optional</sup> <a name="viewOriginalTextInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalTextInput"></a>

```typescript
public readonly viewOriginalTextInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.retention"></a>

```typescript
public readonly retention: number;
```

- *Type:* number

---

##### `tableType`<sup>Required</sup> <a name="tableType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

---

##### `viewExpandedText`<sup>Required</sup> <a name="viewExpandedText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewExpandedText"></a>

```typescript
public readonly viewExpandedText: string;
```

- *Type:* string

---

##### `viewOriginalText`<sup>Required</sup> <a name="viewOriginalText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.viewOriginalText"></a>

```typescript
public readonly viewOriginalText: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogTableConfig <a name="GlueCatalogTableConfig" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableConfig: glueCatalogTable.GlueCatalogTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#description GlueCatalogTable#description}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.openTableFormatInput">openTableFormatInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a></code> | open_table_format_input block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner">owner</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#owner GlueCatalogTable#owner}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex">partitionIndex</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]</code> | partition_index block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys">partitionKeys</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]</code> | partition_keys block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention">retention</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#retention GlueCatalogTable#retention}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor">storageDescriptor</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | storage_descriptor block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType">tableType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#table_type GlueCatalogTable#table_type}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable">targetTable</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | target_table block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewDefinition">viewDefinition</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition">GlueCatalogTableViewDefinition</a></code> | view_definition block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText">viewExpandedText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText">viewOriginalText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `catalogId`<sup>Optional</sup> <a name="catalogId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#description GlueCatalogTable#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openTableFormatInput`<sup>Optional</sup> <a name="openTableFormatInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.openTableFormatInput"></a>

```typescript
public readonly openTableFormatInput: GlueCatalogTableOpenTableFormatInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a>

open_table_format_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#open_table_format_input GlueCatalogTable#open_table_format_input}

---

##### `owner`<sup>Optional</sup> <a name="owner" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#owner GlueCatalogTable#owner}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `partitionIndex`<sup>Optional</sup> <a name="partitionIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionIndex"></a>

```typescript
public readonly partitionIndex: IResolvable | GlueCatalogTablePartitionIndex[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]

partition_index block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#partition_index GlueCatalogTable#partition_index}

---

##### `partitionKeys`<sup>Optional</sup> <a name="partitionKeys" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.partitionKeys"></a>

```typescript
public readonly partitionKeys: IResolvable | GlueCatalogTablePartitionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]

partition_keys block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#partition_keys GlueCatalogTable#partition_keys}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#region GlueCatalogTable#region}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.retention"></a>

```typescript
public readonly retention: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#retention GlueCatalogTable#retention}.

---

##### `storageDescriptor`<sup>Optional</sup> <a name="storageDescriptor" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.storageDescriptor"></a>

```typescript
public readonly storageDescriptor: GlueCatalogTableStorageDescriptor;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

storage_descriptor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#storage_descriptor GlueCatalogTable#storage_descriptor}

---

##### `tableType`<sup>Optional</sup> <a name="tableType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.tableType"></a>

```typescript
public readonly tableType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#table_type GlueCatalogTable#table_type}.

---

##### `targetTable`<sup>Optional</sup> <a name="targetTable" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.targetTable"></a>

```typescript
public readonly targetTable: GlueCatalogTableTargetTable;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

target_table block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#target_table GlueCatalogTable#target_table}

---

##### `viewDefinition`<sup>Optional</sup> <a name="viewDefinition" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewDefinition"></a>

```typescript
public readonly viewDefinition: GlueCatalogTableViewDefinition;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition">GlueCatalogTableViewDefinition</a>

view_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_definition GlueCatalogTable#view_definition}

---

##### `viewExpandedText`<sup>Optional</sup> <a name="viewExpandedText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewExpandedText"></a>

```typescript
public readonly viewExpandedText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}.

---

##### `viewOriginalText`<sup>Optional</sup> <a name="viewOriginalText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableConfig.property.viewOriginalText"></a>

```typescript
public readonly viewOriginalText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}.

---

### GlueCatalogTableOpenTableFormatInput <a name="GlueCatalogTableOpenTableFormatInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInput: glueCatalogTable.GlueCatalogTableOpenTableFormatInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput.property.icebergInput">icebergInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a></code> | iceberg_input block. |

---

##### `icebergInput`<sup>Required</sup> <a name="icebergInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput.property.icebergInput"></a>

```typescript
public readonly icebergInput: GlueCatalogTableOpenTableFormatInputIcebergInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a>

iceberg_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#iceberg_input GlueCatalogTable#iceberg_input}

---

### GlueCatalogTableOpenTableFormatInputIcebergInput <a name="GlueCatalogTableOpenTableFormatInputIcebergInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInput: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.metadataOperation">metadataOperation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#metadata_operation GlueCatalogTable#metadata_operation}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.icebergTableInput">icebergTableInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | iceberg_table_input block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.version">version</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#version GlueCatalogTable#version}. |

---

##### `metadataOperation`<sup>Required</sup> <a name="metadataOperation" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.metadataOperation"></a>

```typescript
public readonly metadataOperation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#metadata_operation GlueCatalogTable#metadata_operation}.

---

##### `icebergTableInput`<sup>Optional</sup> <a name="icebergTableInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.icebergTableInput"></a>

```typescript
public readonly icebergTableInput: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

iceberg_table_input block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#iceberg_table_input GlueCatalogTable#iceberg_table_input}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#version GlueCatalogTable#version}.

---

### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | schema block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | partition_spec block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#properties GlueCatalogTable#properties}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.sortOrder">sortOrder</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder</a></code> | sort_order block. |

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}.

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.schema"></a>

```typescript
public readonly schema: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

schema block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema GlueCatalogTable#schema}

---

##### `partitionSpec`<sup>Optional</sup> <a name="partitionSpec" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

partition_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#partition_spec GlueCatalogTable#partition_spec}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#properties GlueCatalogTable#properties}.

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput.property.sortOrder"></a>

```typescript
public readonly sortOrder: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder</a>

sort_order block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#sort_order GlueCatalogTable#sort_order}

---

### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>[]</code> | fields block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.specId">specId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#spec_id GlueCatalogTable#spec_id}. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.fields"></a>

```typescript
public readonly fields: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#fields GlueCatalogTable#fields}

---

##### `specId`<sup>Optional</sup> <a name="specId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#spec_id GlueCatalogTable#spec_id}.

---

### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.sourceId">sourceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#source_id GlueCatalogTable#source_id}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.transform">transform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#transform GlueCatalogTable#transform}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.fieldId">fieldId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#field_id GlueCatalogTable#field_id}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#source_id GlueCatalogTable#source_id}.

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#transform GlueCatalogTable#transform}.

---

##### `fieldId`<sup>Optional</sup> <a name="fieldId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#field_id GlueCatalogTable#field_id}.

---

### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>[]</code> | fields block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#identifier_field_ids GlueCatalogTable#identifier_field_ids}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.schemaId">schemaId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_id GlueCatalogTable#schema_id}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.fields"></a>

```typescript
public readonly fields: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#fields GlueCatalogTable#fields}

---

##### `identifierFieldIds`<sup>Optional</sup> <a name="identifierFieldIds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#identifier_field_ids GlueCatalogTable#identifier_field_ids}.

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.schemaId"></a>

```typescript
public readonly schemaId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_id GlueCatalogTable#schema_id}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.id">id</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#required GlueCatalogTable#required}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.doc">doc</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#doc GlueCatalogTable#doc}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.initialDefault">initialDefault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#initial_default GlueCatalogTable#initial_default}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.writeDefault">writeDefault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#write_default GlueCatalogTable#write_default}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#id GlueCatalogTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#required GlueCatalogTable#required}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}.

---

##### `doc`<sup>Optional</sup> <a name="doc" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#doc GlueCatalogTable#doc}.

---

##### `initialDefault`<sup>Optional</sup> <a name="initialDefault" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.initialDefault"></a>

```typescript
public readonly initialDefault: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#initial_default GlueCatalogTable#initial_default}.

---

##### `writeDefault`<sup>Optional</sup> <a name="writeDefault" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields.property.writeDefault"></a>

```typescript
public readonly writeDefault: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#write_default GlueCatalogTable#write_default}.

---

### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder.property.fields">fields</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a>[]</code> | fields block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder.property.orderId">orderId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#order_id GlueCatalogTable#order_id}. |

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder.property.fields"></a>

```typescript
public readonly fields: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a>[]

fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#fields GlueCatalogTable#fields}

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder.property.orderId"></a>

```typescript
public readonly orderId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#order_id GlueCatalogTable#order_id}.

---

### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields: glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.property.direction">direction</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#direction GlueCatalogTable#direction}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.property.nullOrder">nullOrder</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#null_order GlueCatalogTable#null_order}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.property.sourceId">sourceId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#source_id GlueCatalogTable#source_id}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.property.transform">transform</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#transform GlueCatalogTable#transform}. |

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#direction GlueCatalogTable#direction}.

---

##### `nullOrder`<sup>Required</sup> <a name="nullOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.property.nullOrder"></a>

```typescript
public readonly nullOrder: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#null_order GlueCatalogTable#null_order}.

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#source_id GlueCatalogTable#source_id}.

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#transform GlueCatalogTable#transform}.

---

### GlueCatalogTablePartitionIndex <a name="GlueCatalogTablePartitionIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTablePartitionIndex: glueCatalogTable.GlueCatalogTablePartitionIndex = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName">indexName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#index_name GlueCatalogTable#index_name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys">keys</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#keys GlueCatalogTable#keys}. |

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#index_name GlueCatalogTable#index_name}.

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#keys GlueCatalogTable#keys}.

---

### GlueCatalogTablePartitionKeys <a name="GlueCatalogTablePartitionKeys" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTablePartitionKeys: glueCatalogTable.GlueCatalogTablePartitionKeys = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptor <a name="GlueCatalogTableStorageDescriptor" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableStorageDescriptor: glueCatalogTable.GlueCatalogTableStorageDescriptor = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.additionalLocations">additionalLocations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#additional_locations GlueCatalogTable#additional_locations}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns">bucketColumns</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns">columns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]</code> | columns block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed">compressed</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#compressed GlueCatalogTable#compressed}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat">inputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#input_format GlueCatalogTable#input_format}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location">location</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets">numberOfBuckets</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat">outputFormat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#output_format GlueCatalogTable#output_format}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | schema_reference block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo">serDeInfo</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | ser_de_info block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | skewed_info block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns">sortColumns</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]</code> | sort_columns block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}. |

---

##### `additionalLocations`<sup>Optional</sup> <a name="additionalLocations" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.additionalLocations"></a>

```typescript
public readonly additionalLocations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#additional_locations GlueCatalogTable#additional_locations}.

---

##### `bucketColumns`<sup>Optional</sup> <a name="bucketColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.bucketColumns"></a>

```typescript
public readonly bucketColumns: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#bucket_columns GlueCatalogTable#bucket_columns}.

---

##### `columns`<sup>Optional</sup> <a name="columns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.columns"></a>

```typescript
public readonly columns: IResolvable | GlueCatalogTableStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]

columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#columns GlueCatalogTable#columns}

---

##### `compressed`<sup>Optional</sup> <a name="compressed" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.compressed"></a>

```typescript
public readonly compressed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#compressed GlueCatalogTable#compressed}.

---

##### `inputFormat`<sup>Optional</sup> <a name="inputFormat" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#input_format GlueCatalogTable#input_format}.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#location GlueCatalogTable#location}.

---

##### `numberOfBuckets`<sup>Optional</sup> <a name="numberOfBuckets" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.numberOfBuckets"></a>

```typescript
public readonly numberOfBuckets: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#number_of_buckets GlueCatalogTable#number_of_buckets}.

---

##### `outputFormat`<sup>Optional</sup> <a name="outputFormat" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#output_format GlueCatalogTable#output_format}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `schemaReference`<sup>Optional</sup> <a name="schemaReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.schemaReference"></a>

```typescript
public readonly schemaReference: GlueCatalogTableStorageDescriptorSchemaReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

schema_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_reference GlueCatalogTable#schema_reference}

---

##### `serDeInfo`<sup>Optional</sup> <a name="serDeInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.serDeInfo"></a>

```typescript
public readonly serDeInfo: GlueCatalogTableStorageDescriptorSerDeInfo;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

ser_de_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#ser_de_info GlueCatalogTable#ser_de_info}

---

##### `skewedInfo`<sup>Optional</sup> <a name="skewedInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.skewedInfo"></a>

```typescript
public readonly skewedInfo: GlueCatalogTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

skewed_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#skewed_info GlueCatalogTable#skewed_info}

---

##### `sortColumns`<sup>Optional</sup> <a name="sortColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.sortColumns"></a>

```typescript
public readonly sortColumns: IResolvable | GlueCatalogTableStorageDescriptorSortColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]

sort_columns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#sort_columns GlueCatalogTable#sort_columns}

---

##### `storedAsSubDirectories`<sup>Optional</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor.property.storedAsSubDirectories"></a>

```typescript
public readonly storedAsSubDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#stored_as_sub_directories GlueCatalogTable#stored_as_sub_directories}.

---

### GlueCatalogTableStorageDescriptorColumns <a name="GlueCatalogTableStorageDescriptorColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableStorageDescriptorColumns: glueCatalogTable.GlueCatalogTableStorageDescriptorColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment">comment</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#comment GlueCatalogTable#comment}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#type GlueCatalogTable#type}.

---

### GlueCatalogTableStorageDescriptorSchemaReference <a name="GlueCatalogTableStorageDescriptorSchemaReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableStorageDescriptorSchemaReference: glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | schema_id block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId">schemaVersionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}. |

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="schemaVersionNumber" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionNumber"></a>

```typescript
public readonly schemaVersionNumber: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_version_number GlueCatalogTable#schema_version_number}.

---

##### `schemaId`<sup>Optional</sup> <a name="schemaId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaId"></a>

```typescript
public readonly schemaId: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

schema_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_id GlueCatalogTable#schema_id}

---

##### `schemaVersionId`<sup>Optional</sup> <a name="schemaVersionId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference.property.schemaVersionId"></a>

```typescript
public readonly schemaVersionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_version_id GlueCatalogTable#schema_version_id}.

---

### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableStorageDescriptorSchemaReferenceSchemaId: glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName">registryName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#registry_name GlueCatalogTable#registry_name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn">schemaArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName">schemaName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_name GlueCatalogTable#schema_name}. |

---

##### `registryName`<sup>Optional</sup> <a name="registryName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#registry_name GlueCatalogTable#registry_name}.

---

##### `schemaArn`<sup>Optional</sup> <a name="schemaArn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_arn GlueCatalogTable#schema_arn}.

---

##### `schemaName`<sup>Optional</sup> <a name="schemaName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#schema_name GlueCatalogTable#schema_name}.

---

### GlueCatalogTableStorageDescriptorSerDeInfo <a name="GlueCatalogTableStorageDescriptorSerDeInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableStorageDescriptorSerDeInfo: glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary">serializationLibrary</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#parameters GlueCatalogTable#parameters}.

---

##### `serializationLibrary`<sup>Optional</sup> <a name="serializationLibrary" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo.property.serializationLibrary"></a>

```typescript
public readonly serializationLibrary: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#serialization_library GlueCatalogTable#serialization_library}.

---

### GlueCatalogTableStorageDescriptorSkewedInfo <a name="GlueCatalogTableStorageDescriptorSkewedInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableStorageDescriptorSkewedInfo: glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames">skewedColumnNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues">skewedColumnValues</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}. |

---

##### `skewedColumnNames`<sup>Optional</sup> <a name="skewedColumnNames" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnNames"></a>

```typescript
public readonly skewedColumnNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#skewed_column_names GlueCatalogTable#skewed_column_names}.

---

##### `skewedColumnValueLocationMaps`<sup>Optional</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValueLocationMaps"></a>

```typescript
public readonly skewedColumnValueLocationMaps: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#skewed_column_value_location_maps GlueCatalogTable#skewed_column_value_location_maps}.

---

##### `skewedColumnValues`<sup>Optional</sup> <a name="skewedColumnValues" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo.property.skewedColumnValues"></a>

```typescript
public readonly skewedColumnValues: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#skewed_column_values GlueCatalogTable#skewed_column_values}.

---

### GlueCatalogTableStorageDescriptorSortColumns <a name="GlueCatalogTableStorageDescriptorSortColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableStorageDescriptorSortColumns: glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column">column</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#column GlueCatalogTable#column}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder">sortOrder</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#sort_order GlueCatalogTable#sort_order}. |

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#column GlueCatalogTable#column}.

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#sort_order GlueCatalogTable#sort_order}.

---

### GlueCatalogTableTargetTable <a name="GlueCatalogTableTargetTable" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableTargetTable: glueCatalogTable.GlueCatalogTableTargetTable = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId">catalogId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName">databaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#region GlueCatalogTable#region}. |

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#catalog_id GlueCatalogTable#catalog_id}.

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#database_name GlueCatalogTable#database_name}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#name GlueCatalogTable#name}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#region GlueCatalogTable#region}.

---

### GlueCatalogTableViewDefinition <a name="GlueCatalogTableViewDefinition" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableViewDefinition: glueCatalogTable.GlueCatalogTableViewDefinition = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.definer">definer</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#definer GlueCatalogTable#definer}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.isProtected">isProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#is_protected GlueCatalogTable#is_protected}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.lastRefreshType">lastRefreshType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#last_refresh_type GlueCatalogTable#last_refresh_type}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.refreshSeconds">refreshSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#refresh_seconds GlueCatalogTable#refresh_seconds}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.representations">representations</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a>[]</code> | representations block. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.subObjects">subObjects</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#sub_objects GlueCatalogTable#sub_objects}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.subObjectVersionIds">subObjectVersionIds</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#sub_object_version_ids GlueCatalogTable#sub_object_version_ids}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.viewVersionId">viewVersionId</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_version_id GlueCatalogTable#view_version_id}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.viewVersionToken">viewVersionToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_version_token GlueCatalogTable#view_version_token}. |

---

##### `definer`<sup>Optional</sup> <a name="definer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.definer"></a>

```typescript
public readonly definer: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#definer GlueCatalogTable#definer}.

---

##### `isProtected`<sup>Optional</sup> <a name="isProtected" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#is_protected GlueCatalogTable#is_protected}.

---

##### `lastRefreshType`<sup>Optional</sup> <a name="lastRefreshType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.lastRefreshType"></a>

```typescript
public readonly lastRefreshType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#last_refresh_type GlueCatalogTable#last_refresh_type}.

---

##### `refreshSeconds`<sup>Optional</sup> <a name="refreshSeconds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.refreshSeconds"></a>

```typescript
public readonly refreshSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#refresh_seconds GlueCatalogTable#refresh_seconds}.

---

##### `representations`<sup>Optional</sup> <a name="representations" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.representations"></a>

```typescript
public readonly representations: IResolvable | GlueCatalogTableViewDefinitionRepresentations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a>[]

representations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#representations GlueCatalogTable#representations}

---

##### `subObjects`<sup>Optional</sup> <a name="subObjects" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.subObjects"></a>

```typescript
public readonly subObjects: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#sub_objects GlueCatalogTable#sub_objects}.

---

##### `subObjectVersionIds`<sup>Optional</sup> <a name="subObjectVersionIds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.subObjectVersionIds"></a>

```typescript
public readonly subObjectVersionIds: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#sub_object_version_ids GlueCatalogTable#sub_object_version_ids}.

---

##### `viewVersionId`<sup>Optional</sup> <a name="viewVersionId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.viewVersionId"></a>

```typescript
public readonly viewVersionId: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_version_id GlueCatalogTable#view_version_id}.

---

##### `viewVersionToken`<sup>Optional</sup> <a name="viewVersionToken" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition.property.viewVersionToken"></a>

```typescript
public readonly viewVersionToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_version_token GlueCatalogTable#view_version_token}.

---

### GlueCatalogTableViewDefinitionRepresentations <a name="GlueCatalogTableViewDefinitionRepresentations" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

const glueCatalogTableViewDefinitionRepresentations: glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.dialect">dialect</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#dialect GlueCatalogTable#dialect}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.dialectVersion">dialectVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#dialect_version GlueCatalogTable#dialect_version}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.validationConnection">validationConnection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#validation_connection GlueCatalogTable#validation_connection}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.viewExpandedText">viewExpandedText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.viewOriginalText">viewOriginalText</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}. |

---

##### `dialect`<sup>Optional</sup> <a name="dialect" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.dialect"></a>

```typescript
public readonly dialect: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#dialect GlueCatalogTable#dialect}.

---

##### `dialectVersion`<sup>Optional</sup> <a name="dialectVersion" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.dialectVersion"></a>

```typescript
public readonly dialectVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#dialect_version GlueCatalogTable#dialect_version}.

---

##### `validationConnection`<sup>Optional</sup> <a name="validationConnection" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.validationConnection"></a>

```typescript
public readonly validationConnection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#validation_connection GlueCatalogTable#validation_connection}.

---

##### `viewExpandedText`<sup>Optional</sup> <a name="viewExpandedText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.viewExpandedText"></a>

```typescript
public readonly viewExpandedText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_expanded_text GlueCatalogTable#view_expanded_text}.

---

##### `viewOriginalText`<sup>Optional</sup> <a name="viewOriginalText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations.property.viewOriginalText"></a>

```typescript
public readonly viewOriginalText: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.58.0/docs/resources/glue_catalog_table#view_original_text GlueCatalogTable#view_original_text}.

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec">putPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSortOrder">putSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetPartitionSpec">resetPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetProperties">resetProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPartitionSpec` <a name="putPartitionSpec" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec"></a>

```typescript
public putPartitionSpec(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putPartitionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema"></a>

```typescript
public putSchema(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---

##### `putSortOrder` <a name="putSortOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSortOrder"></a>

```typescript
public putSortOrder(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.putSortOrder.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder</a>

---

##### `resetPartitionSpec` <a name="resetPartitionSpec" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetPartitionSpec"></a>

```typescript
public resetPartitionSpec(): void
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetProperties"></a>

```typescript
public resetProperties(): void
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.resetSortOrder"></a>

```typescript
public resetSortOrder(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec">partitionSpec</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.sortOrder">sortOrder</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpecInput">partitionSpecInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schemaInput">schemaInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties">properties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `partitionSpec`<sup>Required</sup> <a name="partitionSpec" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpec"></a>

```typescript
public readonly partitionSpec: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference</a>

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schema"></a>

```typescript
public readonly schema: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference</a>

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `partitionSpecInput`<sup>Optional</sup> <a name="partitionSpecInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.partitionSpecInput"></a>

```typescript
public readonly partitionSpecInput: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.propertiesInput"></a>

```typescript
public readonly propertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder</a>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.properties"></a>

```typescript
public readonly properties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get"></a>

```typescript
public get(index: number): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>[]

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetFieldId">resetFieldId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFieldId` <a name="resetFieldId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.resetFieldId"></a>

```typescript
public resetFieldId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldIdInput">fieldIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId">fieldId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fieldIdInput`<sup>Optional</sup> <a name="fieldIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldIdInput"></a>

```typescript
public readonly fieldIdInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: number;
```

- *Type:* number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transformInput"></a>

```typescript
public readonly transformInput: string;
```

- *Type:* string

---

##### `fieldId`<sup>Required</sup> <a name="fieldId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.fieldId"></a>

```typescript
public readonly fieldId: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetSpecId">resetSpecId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>[]

---

##### `resetSpecId` <a name="resetSpecId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.resetSpecId"></a>

```typescript
public resetSpecId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specIdInput">specIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId">specId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fields"></a>

```typescript
public readonly fields: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecFields</a>[]

---

##### `specIdInput`<sup>Optional</sup> <a name="specIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specIdInput"></a>

```typescript
public readonly specIdInput: number;
```

- *Type:* number

---

##### `specId`<sup>Required</sup> <a name="specId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.specId"></a>

```typescript
public readonly specId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputPartitionSpec</a>

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get"></a>

```typescript
public get(index: number): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>[]

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetDoc">resetDoc</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetInitialDefault">resetInitialDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetWriteDefault">resetWriteDefault</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDoc` <a name="resetDoc" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetDoc"></a>

```typescript
public resetDoc(): void
```

##### `resetInitialDefault` <a name="resetInitialDefault" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetInitialDefault"></a>

```typescript
public resetInitialDefault(): void
```

##### `resetWriteDefault` <a name="resetWriteDefault" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.resetWriteDefault"></a>

```typescript
public resetWriteDefault(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.docInput">docInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.idInput">idInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.initialDefaultInput">initialDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.writeDefaultInput">writeDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc">doc</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id">id</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.initialDefault">initialDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required">required</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.writeDefault">writeDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `docInput`<sup>Optional</sup> <a name="docInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.docInput"></a>

```typescript
public readonly docInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.idInput"></a>

```typescript
public readonly idInput: number;
```

- *Type:* number

---

##### `initialDefaultInput`<sup>Optional</sup> <a name="initialDefaultInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.initialDefaultInput"></a>

```typescript
public readonly initialDefaultInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `writeDefaultInput`<sup>Optional</sup> <a name="writeDefaultInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.writeDefaultInput"></a>

```typescript
public readonly writeDefaultInput: string;
```

- *Type:* string

---

##### `doc`<sup>Required</sup> <a name="doc" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.doc"></a>

```typescript
public readonly doc: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.id"></a>

```typescript
public readonly id: number;
```

- *Type:* number

---

##### `initialDefault`<sup>Required</sup> <a name="initialDefault" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.initialDefault"></a>

```typescript
public readonly initialDefault: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `writeDefault`<sup>Required</sup> <a name="writeDefault" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.writeDefault"></a>

```typescript
public readonly writeDefault: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetIdentifierFieldIds">resetIdentifierFieldIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>[]

---

##### `resetIdentifierFieldIds` <a name="resetIdentifierFieldIds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetIdentifierFieldIds"></a>

```typescript
public resetIdentifierFieldIds(): void
```

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIdsInput">identifierFieldIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds">identifierFieldIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId">schemaId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fields"></a>

```typescript
public readonly fields: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaFields</a>[]

---

##### `identifierFieldIdsInput`<sup>Optional</sup> <a name="identifierFieldIdsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIdsInput"></a>

```typescript
public readonly identifierFieldIdsInput: number[];
```

- *Type:* number[]

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: number;
```

- *Type:* number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `identifierFieldIds`<sup>Required</sup> <a name="identifierFieldIds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.identifierFieldIds"></a>

```typescript
public readonly identifierFieldIds: number[];
```

- *Type:* number[]

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: number;
```

- *Type:* number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchemaOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSchema</a>

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.get"></a>

```typescript
public get(index: number): GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a>[]

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.directionInput">directionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.nullOrderInput">nullOrderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.sourceIdInput">sourceIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.transformInput">transformInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.direction">direction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.nullOrder">nullOrder</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.sourceId">sourceId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.transform">transform</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.directionInput"></a>

```typescript
public readonly directionInput: string;
```

- *Type:* string

---

##### `nullOrderInput`<sup>Optional</sup> <a name="nullOrderInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.nullOrderInput"></a>

```typescript
public readonly nullOrderInput: string;
```

- *Type:* string

---

##### `sourceIdInput`<sup>Optional</sup> <a name="sourceIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.sourceIdInput"></a>

```typescript
public readonly sourceIdInput: number;
```

- *Type:* number

---

##### `transformInput`<sup>Optional</sup> <a name="transformInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.transformInput"></a>

```typescript
public readonly transformInput: string;
```

- *Type:* string

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.direction"></a>

```typescript
public readonly direction: string;
```

- *Type:* string

---

##### `nullOrder`<sup>Required</sup> <a name="nullOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.nullOrder"></a>

```typescript
public readonly nullOrder: string;
```

- *Type:* string

---

##### `sourceId`<sup>Required</sup> <a name="sourceId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.sourceId"></a>

```typescript
public readonly sourceId: number;
```

- *Type:* number

---

##### `transform`<sup>Required</sup> <a name="transform" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.transform"></a>

```typescript
public readonly transform: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a>

---


### GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.putFields">putFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.putFields"></a>

```typescript
public putFields(value: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.putFields.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.orderIdInput">orderIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.orderId">orderId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.fields"></a>

```typescript
public readonly fields: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.fieldsInput"></a>

```typescript
public readonly fieldsInput: IResolvable | GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderFields</a>[]

---

##### `orderIdInput`<sup>Optional</sup> <a name="orderIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.orderIdInput"></a>

```typescript
public readonly orderIdInput: number;
```

- *Type:* number

---

##### `orderId`<sup>Required</sup> <a name="orderId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.orderId"></a>

```typescript
public readonly orderId: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputSortOrder</a>

---


### GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference <a name="GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput">putIcebergTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resetIcebergTableInput">resetIcebergTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergTableInput` <a name="putIcebergTableInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput"></a>

```typescript
public putIcebergTableInput(value: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.putIcebergTableInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---

##### `resetIcebergTableInput` <a name="resetIcebergTableInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resetIcebergTableInput"></a>

```typescript
public resetIcebergTableInput(): void
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.resetVersion"></a>

```typescript
public resetVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput">icebergTableInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInputInput">icebergTableInputInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperationInput">metadataOperationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation">metadataOperation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergTableInput`<sup>Required</sup> <a name="icebergTableInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInput"></a>

```typescript
public readonly icebergTableInput: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInputOutputReference</a>

---

##### `icebergTableInputInput`<sup>Optional</sup> <a name="icebergTableInputInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.icebergTableInputInput"></a>

```typescript
public readonly icebergTableInputInput: GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput">GlueCatalogTableOpenTableFormatInputIcebergInputIcebergTableInput</a>

---

##### `metadataOperationInput`<sup>Optional</sup> <a name="metadataOperationInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperationInput"></a>

```typescript
public readonly metadataOperationInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `metadataOperation`<sup>Required</sup> <a name="metadataOperation" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.metadataOperation"></a>

```typescript
public readonly metadataOperation: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableOpenTableFormatInputIcebergInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a>

---


### GlueCatalogTableOpenTableFormatInputOutputReference <a name="GlueCatalogTableOpenTableFormatInputOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.putIcebergInput">putIcebergInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIcebergInput` <a name="putIcebergInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.putIcebergInput"></a>

```typescript
public putIcebergInput(value: GlueCatalogTableOpenTableFormatInputIcebergInput): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.putIcebergInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.icebergInput">icebergInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.icebergInputInput">icebergInputInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `icebergInput`<sup>Required</sup> <a name="icebergInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.icebergInput"></a>

```typescript
public readonly icebergInput: GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference">GlueCatalogTableOpenTableFormatInputIcebergInputOutputReference</a>

---

##### `icebergInputInput`<sup>Optional</sup> <a name="icebergInputInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.icebergInputInput"></a>

```typescript
public readonly icebergInputInput: GlueCatalogTableOpenTableFormatInputIcebergInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputIcebergInput">GlueCatalogTableOpenTableFormatInputIcebergInput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableOpenTableFormatInput;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableOpenTableFormatInput">GlueCatalogTableOpenTableFormatInput</a>

---


### GlueCatalogTablePartitionIndexList <a name="GlueCatalogTablePartitionIndexList" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTablePartitionIndexList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get"></a>

```typescript
public get(index: number): GlueCatalogTablePartitionIndexOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTablePartitionIndex[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>[]

---


### GlueCatalogTablePartitionIndexOutputReference <a name="GlueCatalogTablePartitionIndexOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus">indexStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput">indexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput">keysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName">indexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `indexStatus`<sup>Required</sup> <a name="indexStatus" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexStatus"></a>

```typescript
public readonly indexStatus: string;
```

- *Type:* string

---

##### `indexNameInput`<sup>Optional</sup> <a name="indexNameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexNameInput"></a>

```typescript
public readonly indexNameInput: string;
```

- *Type:* string

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keysInput"></a>

```typescript
public readonly keysInput: string[];
```

- *Type:* string[]

---

##### `indexName`<sup>Required</sup> <a name="indexName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.indexName"></a>

```typescript
public readonly indexName: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndexOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTablePartitionIndex;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionIndex">GlueCatalogTablePartitionIndex</a>

---


### GlueCatalogTablePartitionKeysList <a name="GlueCatalogTablePartitionKeysList" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTablePartitionKeysList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get"></a>

```typescript
public get(index: number): GlueCatalogTablePartitionKeysOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTablePartitionKeys[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>[]

---


### GlueCatalogTablePartitionKeysOutputReference <a name="GlueCatalogTablePartitionKeysOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeysOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTablePartitionKeys;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTablePartitionKeys">GlueCatalogTablePartitionKeys</a>

---


### GlueCatalogTableStorageDescriptorColumnsList <a name="GlueCatalogTableStorageDescriptorColumnsList" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get"></a>

```typescript
public get(index: number): GlueCatalogTableStorageDescriptorColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]

---


### GlueCatalogTableStorageDescriptorColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorColumnsOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComment` <a name="resetComment" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetType` <a name="resetType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.resetType"></a>

```typescript
public resetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableStorageDescriptorColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>

---


### GlueCatalogTableStorageDescriptorOutputReference <a name="GlueCatalogTableStorageDescriptorOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns">putColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference">putSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo">putSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo">putSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns">putSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetAdditionalLocations">resetAdditionalLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns">resetBucketColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns">resetColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed">resetCompressed</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat">resetInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets">resetNumberOfBuckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat">resetOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference">resetSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo">resetSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo">resetSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns">resetSortColumns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories">resetStoredAsSubDirectories</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putColumns` <a name="putColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns"></a>

```typescript
public putColumns(value: IResolvable | GlueCatalogTableStorageDescriptorColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]

---

##### `putSchemaReference` <a name="putSchemaReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference"></a>

```typescript
public putSchemaReference(value: GlueCatalogTableStorageDescriptorSchemaReference): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSchemaReference.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `putSerDeInfo` <a name="putSerDeInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo"></a>

```typescript
public putSerDeInfo(value: GlueCatalogTableStorageDescriptorSerDeInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSerDeInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `putSkewedInfo` <a name="putSkewedInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo"></a>

```typescript
public putSkewedInfo(value: GlueCatalogTableStorageDescriptorSkewedInfo): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSkewedInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `putSortColumns` <a name="putSortColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns"></a>

```typescript
public putSortColumns(value: IResolvable | GlueCatalogTableStorageDescriptorSortColumns[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.putSortColumns.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]

---

##### `resetAdditionalLocations` <a name="resetAdditionalLocations" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetAdditionalLocations"></a>

```typescript
public resetAdditionalLocations(): void
```

##### `resetBucketColumns` <a name="resetBucketColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetBucketColumns"></a>

```typescript
public resetBucketColumns(): void
```

##### `resetColumns` <a name="resetColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetColumns"></a>

```typescript
public resetColumns(): void
```

##### `resetCompressed` <a name="resetCompressed" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetCompressed"></a>

```typescript
public resetCompressed(): void
```

##### `resetInputFormat` <a name="resetInputFormat" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetInputFormat"></a>

```typescript
public resetInputFormat(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetNumberOfBuckets` <a name="resetNumberOfBuckets" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetNumberOfBuckets"></a>

```typescript
public resetNumberOfBuckets(): void
```

##### `resetOutputFormat` <a name="resetOutputFormat" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetOutputFormat"></a>

```typescript
public resetOutputFormat(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSchemaReference` <a name="resetSchemaReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSchemaReference"></a>

```typescript
public resetSchemaReference(): void
```

##### `resetSerDeInfo` <a name="resetSerDeInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSerDeInfo"></a>

```typescript
public resetSerDeInfo(): void
```

##### `resetSkewedInfo` <a name="resetSkewedInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSkewedInfo"></a>

```typescript
public resetSkewedInfo(): void
```

##### `resetSortColumns` <a name="resetSortColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetSortColumns"></a>

```typescript
public resetSortColumns(): void
```

##### `resetStoredAsSubDirectories` <a name="resetStoredAsSubDirectories" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.resetStoredAsSubDirectories"></a>

```typescript
public resetStoredAsSubDirectories(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns">columns</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference">schemaReference</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo">serDeInfo</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo">skewedInfo</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns">sortColumns</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.additionalLocationsInput">additionalLocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput">bucketColumnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput">columnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput">compressedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput">inputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput">numberOfBucketsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput">outputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput">schemaReferenceInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput">serDeInfoInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput">skewedInfoInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput">sortColumnsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput">storedAsSubDirectoriesInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.additionalLocations">additionalLocations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns">bucketColumns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed">compressed</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat">inputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets">numberOfBuckets</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat">outputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories">storedAsSubDirectories</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columns"></a>

```typescript
public readonly columns: GlueCatalogTableStorageDescriptorColumnsList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumnsList">GlueCatalogTableStorageDescriptorColumnsList</a>

---

##### `schemaReference`<sup>Required</sup> <a name="schemaReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReference"></a>

```typescript
public readonly schemaReference: GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference</a>

---

##### `serDeInfo`<sup>Required</sup> <a name="serDeInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfo"></a>

```typescript
public readonly serDeInfo: GlueCatalogTableStorageDescriptorSerDeInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference">GlueCatalogTableStorageDescriptorSerDeInfoOutputReference</a>

---

##### `skewedInfo`<sup>Required</sup> <a name="skewedInfo" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfo"></a>

```typescript
public readonly skewedInfo: GlueCatalogTableStorageDescriptorSkewedInfoOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference">GlueCatalogTableStorageDescriptorSkewedInfoOutputReference</a>

---

##### `sortColumns`<sup>Required</sup> <a name="sortColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumns"></a>

```typescript
public readonly sortColumns: GlueCatalogTableStorageDescriptorSortColumnsList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList">GlueCatalogTableStorageDescriptorSortColumnsList</a>

---

##### `additionalLocationsInput`<sup>Optional</sup> <a name="additionalLocationsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.additionalLocationsInput"></a>

```typescript
public readonly additionalLocationsInput: string[];
```

- *Type:* string[]

---

##### `bucketColumnsInput`<sup>Optional</sup> <a name="bucketColumnsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumnsInput"></a>

```typescript
public readonly bucketColumnsInput: string[];
```

- *Type:* string[]

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: IResolvable | GlueCatalogTableStorageDescriptorColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorColumns">GlueCatalogTableStorageDescriptorColumns</a>[]

---

##### `compressedInput`<sup>Optional</sup> <a name="compressedInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressedInput"></a>

```typescript
public readonly compressedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputFormatInput`<sup>Optional</sup> <a name="inputFormatInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormatInput"></a>

```typescript
public readonly inputFormatInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `numberOfBucketsInput`<sup>Optional</sup> <a name="numberOfBucketsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBucketsInput"></a>

```typescript
public readonly numberOfBucketsInput: number;
```

- *Type:* number

---

##### `outputFormatInput`<sup>Optional</sup> <a name="outputFormatInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormatInput"></a>

```typescript
public readonly outputFormatInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `schemaReferenceInput`<sup>Optional</sup> <a name="schemaReferenceInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.schemaReferenceInput"></a>

```typescript
public readonly schemaReferenceInput: GlueCatalogTableStorageDescriptorSchemaReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---

##### `serDeInfoInput`<sup>Optional</sup> <a name="serDeInfoInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.serDeInfoInput"></a>

```typescript
public readonly serDeInfoInput: GlueCatalogTableStorageDescriptorSerDeInfo;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---

##### `skewedInfoInput`<sup>Optional</sup> <a name="skewedInfoInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.skewedInfoInput"></a>

```typescript
public readonly skewedInfoInput: GlueCatalogTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---

##### `sortColumnsInput`<sup>Optional</sup> <a name="sortColumnsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.sortColumnsInput"></a>

```typescript
public readonly sortColumnsInput: IResolvable | GlueCatalogTableStorageDescriptorSortColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]

---

##### `storedAsSubDirectoriesInput`<sup>Optional</sup> <a name="storedAsSubDirectoriesInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectoriesInput"></a>

```typescript
public readonly storedAsSubDirectoriesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `additionalLocations`<sup>Required</sup> <a name="additionalLocations" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.additionalLocations"></a>

```typescript
public readonly additionalLocations: string[];
```

- *Type:* string[]

---

##### `bucketColumns`<sup>Required</sup> <a name="bucketColumns" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.bucketColumns"></a>

```typescript
public readonly bucketColumns: string[];
```

- *Type:* string[]

---

##### `compressed`<sup>Required</sup> <a name="compressed" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.compressed"></a>

```typescript
public readonly compressed: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `inputFormat`<sup>Required</sup> <a name="inputFormat" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.inputFormat"></a>

```typescript
public readonly inputFormat: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `numberOfBuckets`<sup>Required</sup> <a name="numberOfBuckets" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.numberOfBuckets"></a>

```typescript
public readonly numberOfBuckets: number;
```

- *Type:* number

---

##### `outputFormat`<sup>Required</sup> <a name="outputFormat" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.outputFormat"></a>

```typescript
public readonly outputFormat: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `storedAsSubDirectories`<sup>Required</sup> <a name="storedAsSubDirectories" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.storedAsSubDirectories"></a>

```typescript
public readonly storedAsSubDirectories: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptor;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptor">GlueCatalogTableStorageDescriptor</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId">putSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId">resetSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId">resetSchemaVersionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchemaId` <a name="putSchemaId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId"></a>

```typescript
public putSchemaId(value: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.putSchemaId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `resetSchemaId` <a name="resetSchemaId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaId"></a>

```typescript
public resetSchemaId(): void
```

##### `resetSchemaVersionId` <a name="resetSchemaVersionId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.resetSchemaVersionId"></a>

```typescript
public resetSchemaVersionId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId">schemaId</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput">schemaIdInput</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput">schemaVersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput">schemaVersionNumberInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId">schemaVersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber">schemaVersionNumber</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `schemaId`<sup>Required</sup> <a name="schemaId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaId"></a>

```typescript
public readonly schemaId: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference</a>

---

##### `schemaIdInput`<sup>Optional</sup> <a name="schemaIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaIdInput"></a>

```typescript
public readonly schemaIdInput: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---

##### `schemaVersionIdInput`<sup>Optional</sup> <a name="schemaVersionIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionIdInput"></a>

```typescript
public readonly schemaVersionIdInput: string;
```

- *Type:* string

---

##### `schemaVersionNumberInput`<sup>Optional</sup> <a name="schemaVersionNumberInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumberInput"></a>

```typescript
public readonly schemaVersionNumberInput: number;
```

- *Type:* number

---

##### `schemaVersionId`<sup>Required</sup> <a name="schemaVersionId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionId"></a>

```typescript
public readonly schemaVersionId: string;
```

- *Type:* string

---

##### `schemaVersionNumber`<sup>Required</sup> <a name="schemaVersionNumber" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.schemaVersionNumber"></a>

```typescript
public readonly schemaVersionNumber: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptorSchemaReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReference">GlueCatalogTableStorageDescriptorSchemaReference</a>

---


### GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference <a name="GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName">resetRegistryName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn">resetSchemaArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName">resetSchemaName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegistryName` <a name="resetRegistryName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetRegistryName"></a>

```typescript
public resetRegistryName(): void
```

##### `resetSchemaArn` <a name="resetSchemaArn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaArn"></a>

```typescript
public resetSchemaArn(): void
```

##### `resetSchemaName` <a name="resetSchemaName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.resetSchemaName"></a>

```typescript
public resetSchemaName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput">registryNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput">schemaArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName">registryName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn">schemaArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `registryNameInput`<sup>Optional</sup> <a name="registryNameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryNameInput"></a>

```typescript
public readonly registryNameInput: string;
```

- *Type:* string

---

##### `schemaArnInput`<sup>Optional</sup> <a name="schemaArnInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArnInput"></a>

```typescript
public readonly schemaArnInput: string;
```

- *Type:* string

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `registryName`<sup>Required</sup> <a name="registryName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.registryName"></a>

```typescript
public readonly registryName: string;
```

- *Type:* string

---

##### `schemaArn`<sup>Required</sup> <a name="schemaArn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaArn"></a>

```typescript
public readonly schemaArn: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId">GlueCatalogTableStorageDescriptorSchemaReferenceSchemaId</a>

---


### GlueCatalogTableStorageDescriptorSerDeInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSerDeInfoOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary">resetSerializationLibrary</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetName"></a>

```typescript
public resetName(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSerializationLibrary` <a name="resetSerializationLibrary" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.resetSerializationLibrary"></a>

```typescript
public resetSerializationLibrary(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput">serializationLibraryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary">serializationLibrary</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serializationLibraryInput`<sup>Optional</sup> <a name="serializationLibraryInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibraryInput"></a>

```typescript
public readonly serializationLibraryInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serializationLibrary`<sup>Required</sup> <a name="serializationLibrary" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.serializationLibrary"></a>

```typescript
public readonly serializationLibrary: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptorSerDeInfo;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSerDeInfo">GlueCatalogTableStorageDescriptorSerDeInfo</a>

---


### GlueCatalogTableStorageDescriptorSkewedInfoOutputReference <a name="GlueCatalogTableStorageDescriptorSkewedInfoOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames">resetSkewedColumnNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps">resetSkewedColumnValueLocationMaps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues">resetSkewedColumnValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSkewedColumnNames` <a name="resetSkewedColumnNames" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnNames"></a>

```typescript
public resetSkewedColumnNames(): void
```

##### `resetSkewedColumnValueLocationMaps` <a name="resetSkewedColumnValueLocationMaps" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValueLocationMaps"></a>

```typescript
public resetSkewedColumnValueLocationMaps(): void
```

##### `resetSkewedColumnValues` <a name="resetSkewedColumnValues" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.resetSkewedColumnValues"></a>

```typescript
public resetSkewedColumnValues(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput">skewedColumnNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput">skewedColumnValueLocationMapsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput">skewedColumnValuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames">skewedColumnNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps">skewedColumnValueLocationMaps</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues">skewedColumnValues</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `skewedColumnNamesInput`<sup>Optional</sup> <a name="skewedColumnNamesInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNamesInput"></a>

```typescript
public readonly skewedColumnNamesInput: string[];
```

- *Type:* string[]

---

##### `skewedColumnValueLocationMapsInput`<sup>Optional</sup> <a name="skewedColumnValueLocationMapsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMapsInput"></a>

```typescript
public readonly skewedColumnValueLocationMapsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `skewedColumnValuesInput`<sup>Optional</sup> <a name="skewedColumnValuesInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValuesInput"></a>

```typescript
public readonly skewedColumnValuesInput: string[];
```

- *Type:* string[]

---

##### `skewedColumnNames`<sup>Required</sup> <a name="skewedColumnNames" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnNames"></a>

```typescript
public readonly skewedColumnNames: string[];
```

- *Type:* string[]

---

##### `skewedColumnValueLocationMaps`<sup>Required</sup> <a name="skewedColumnValueLocationMaps" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValueLocationMaps"></a>

```typescript
public readonly skewedColumnValueLocationMaps: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `skewedColumnValues`<sup>Required</sup> <a name="skewedColumnValues" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.skewedColumnValues"></a>

```typescript
public readonly skewedColumnValues: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableStorageDescriptorSkewedInfo;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSkewedInfo">GlueCatalogTableStorageDescriptorSkewedInfo</a>

---


### GlueCatalogTableStorageDescriptorSortColumnsList <a name="GlueCatalogTableStorageDescriptorSortColumnsList" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get"></a>

```typescript
public get(index: number): GlueCatalogTableStorageDescriptorSortColumnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableStorageDescriptorSortColumns[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>[]

---


### GlueCatalogTableStorageDescriptorSortColumnsOutputReference <a name="GlueCatalogTableStorageDescriptorSortColumnsOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder">sortOrder</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrderInput"></a>

```typescript
public readonly sortOrderInput: number;
```

- *Type:* number

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.sortOrder"></a>

```typescript
public readonly sortOrder: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumnsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableStorageDescriptorSortColumns;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableStorageDescriptorSortColumns">GlueCatalogTableStorageDescriptorSortColumns</a>

---


### GlueCatalogTableTargetTableOutputReference <a name="GlueCatalogTableTargetTableOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableTargetTableOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput">catalogIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogIdInput`<sup>Optional</sup> <a name="catalogIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogIdInput"></a>

```typescript
public readonly catalogIdInput: string;
```

- *Type:* string

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTableOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableTargetTable;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableTargetTable">GlueCatalogTableTargetTable</a>

---


### GlueCatalogTableViewDefinitionOutputReference <a name="GlueCatalogTableViewDefinitionOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.putRepresentations">putRepresentations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetDefiner">resetDefiner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetIsProtected">resetIsProtected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetLastRefreshType">resetLastRefreshType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetRefreshSeconds">resetRefreshSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetRepresentations">resetRepresentations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetSubObjects">resetSubObjects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetSubObjectVersionIds">resetSubObjectVersionIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetViewVersionId">resetViewVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetViewVersionToken">resetViewVersionToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepresentations` <a name="putRepresentations" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.putRepresentations"></a>

```typescript
public putRepresentations(value: IResolvable | GlueCatalogTableViewDefinitionRepresentations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.putRepresentations.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a>[]

---

##### `resetDefiner` <a name="resetDefiner" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetDefiner"></a>

```typescript
public resetDefiner(): void
```

##### `resetIsProtected` <a name="resetIsProtected" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetIsProtected"></a>

```typescript
public resetIsProtected(): void
```

##### `resetLastRefreshType` <a name="resetLastRefreshType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetLastRefreshType"></a>

```typescript
public resetLastRefreshType(): void
```

##### `resetRefreshSeconds` <a name="resetRefreshSeconds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetRefreshSeconds"></a>

```typescript
public resetRefreshSeconds(): void
```

##### `resetRepresentations` <a name="resetRepresentations" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetRepresentations"></a>

```typescript
public resetRepresentations(): void
```

##### `resetSubObjects` <a name="resetSubObjects" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetSubObjects"></a>

```typescript
public resetSubObjects(): void
```

##### `resetSubObjectVersionIds` <a name="resetSubObjectVersionIds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetSubObjectVersionIds"></a>

```typescript
public resetSubObjectVersionIds(): void
```

##### `resetViewVersionId` <a name="resetViewVersionId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetViewVersionId"></a>

```typescript
public resetViewVersionId(): void
```

##### `resetViewVersionToken` <a name="resetViewVersionToken" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.resetViewVersionToken"></a>

```typescript
public resetViewVersionToken(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.representations">representations</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList">GlueCatalogTableViewDefinitionRepresentationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.definerInput">definerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.isProtectedInput">isProtectedInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.lastRefreshTypeInput">lastRefreshTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.refreshSecondsInput">refreshSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.representationsInput">representationsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.subObjectsInput">subObjectsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.subObjectVersionIdsInput">subObjectVersionIdsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.viewVersionIdInput">viewVersionIdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.viewVersionTokenInput">viewVersionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.definer">definer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.isProtected">isProtected</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.lastRefreshType">lastRefreshType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.refreshSeconds">refreshSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.subObjects">subObjects</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.subObjectVersionIds">subObjectVersionIds</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.viewVersionId">viewVersionId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.viewVersionToken">viewVersionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition">GlueCatalogTableViewDefinition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `representations`<sup>Required</sup> <a name="representations" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.representations"></a>

```typescript
public readonly representations: GlueCatalogTableViewDefinitionRepresentationsList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList">GlueCatalogTableViewDefinitionRepresentationsList</a>

---

##### `definerInput`<sup>Optional</sup> <a name="definerInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.definerInput"></a>

```typescript
public readonly definerInput: string;
```

- *Type:* string

---

##### `isProtectedInput`<sup>Optional</sup> <a name="isProtectedInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.isProtectedInput"></a>

```typescript
public readonly isProtectedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastRefreshTypeInput`<sup>Optional</sup> <a name="lastRefreshTypeInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.lastRefreshTypeInput"></a>

```typescript
public readonly lastRefreshTypeInput: string;
```

- *Type:* string

---

##### `refreshSecondsInput`<sup>Optional</sup> <a name="refreshSecondsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.refreshSecondsInput"></a>

```typescript
public readonly refreshSecondsInput: number;
```

- *Type:* number

---

##### `representationsInput`<sup>Optional</sup> <a name="representationsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.representationsInput"></a>

```typescript
public readonly representationsInput: IResolvable | GlueCatalogTableViewDefinitionRepresentations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a>[]

---

##### `subObjectsInput`<sup>Optional</sup> <a name="subObjectsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.subObjectsInput"></a>

```typescript
public readonly subObjectsInput: string[];
```

- *Type:* string[]

---

##### `subObjectVersionIdsInput`<sup>Optional</sup> <a name="subObjectVersionIdsInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.subObjectVersionIdsInput"></a>

```typescript
public readonly subObjectVersionIdsInput: number[];
```

- *Type:* number[]

---

##### `viewVersionIdInput`<sup>Optional</sup> <a name="viewVersionIdInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.viewVersionIdInput"></a>

```typescript
public readonly viewVersionIdInput: number;
```

- *Type:* number

---

##### `viewVersionTokenInput`<sup>Optional</sup> <a name="viewVersionTokenInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.viewVersionTokenInput"></a>

```typescript
public readonly viewVersionTokenInput: string;
```

- *Type:* string

---

##### `definer`<sup>Required</sup> <a name="definer" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.definer"></a>

```typescript
public readonly definer: string;
```

- *Type:* string

---

##### `isProtected`<sup>Required</sup> <a name="isProtected" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.isProtected"></a>

```typescript
public readonly isProtected: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `lastRefreshType`<sup>Required</sup> <a name="lastRefreshType" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.lastRefreshType"></a>

```typescript
public readonly lastRefreshType: string;
```

- *Type:* string

---

##### `refreshSeconds`<sup>Required</sup> <a name="refreshSeconds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.refreshSeconds"></a>

```typescript
public readonly refreshSeconds: number;
```

- *Type:* number

---

##### `subObjects`<sup>Required</sup> <a name="subObjects" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.subObjects"></a>

```typescript
public readonly subObjects: string[];
```

- *Type:* string[]

---

##### `subObjectVersionIds`<sup>Required</sup> <a name="subObjectVersionIds" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.subObjectVersionIds"></a>

```typescript
public readonly subObjectVersionIds: number[];
```

- *Type:* number[]

---

##### `viewVersionId`<sup>Required</sup> <a name="viewVersionId" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.viewVersionId"></a>

```typescript
public readonly viewVersionId: number;
```

- *Type:* number

---

##### `viewVersionToken`<sup>Required</sup> <a name="viewVersionToken" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.viewVersionToken"></a>

```typescript
public readonly viewVersionToken: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GlueCatalogTableViewDefinition;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinition">GlueCatalogTableViewDefinition</a>

---


### GlueCatalogTableViewDefinitionRepresentationsList <a name="GlueCatalogTableViewDefinitionRepresentationsList" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.get"></a>

```typescript
public get(index: number): GlueCatalogTableViewDefinitionRepresentationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableViewDefinitionRepresentations[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a>[]

---


### GlueCatalogTableViewDefinitionRepresentationsOutputReference <a name="GlueCatalogTableViewDefinitionRepresentationsOutputReference" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer"></a>

```typescript
import { glueCatalogTable } from '@cdktn/provider-aws'

new glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetDialect">resetDialect</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetDialectVersion">resetDialectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetValidationConnection">resetValidationConnection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetViewExpandedText">resetViewExpandedText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetViewOriginalText">resetViewOriginalText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDialect` <a name="resetDialect" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetDialect"></a>

```typescript
public resetDialect(): void
```

##### `resetDialectVersion` <a name="resetDialectVersion" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetDialectVersion"></a>

```typescript
public resetDialectVersion(): void
```

##### `resetValidationConnection` <a name="resetValidationConnection" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetValidationConnection"></a>

```typescript
public resetValidationConnection(): void
```

##### `resetViewExpandedText` <a name="resetViewExpandedText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetViewExpandedText"></a>

```typescript
public resetViewExpandedText(): void
```

##### `resetViewOriginalText` <a name="resetViewOriginalText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.resetViewOriginalText"></a>

```typescript
public resetViewOriginalText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.dialectInput">dialectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.dialectVersionInput">dialectVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.validationConnectionInput">validationConnectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.viewExpandedTextInput">viewExpandedTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.viewOriginalTextInput">viewOriginalTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.dialect">dialect</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.dialectVersion">dialectVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.validationConnection">validationConnection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.viewExpandedText">viewExpandedText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.viewOriginalText">viewOriginalText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dialectInput`<sup>Optional</sup> <a name="dialectInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.dialectInput"></a>

```typescript
public readonly dialectInput: string;
```

- *Type:* string

---

##### `dialectVersionInput`<sup>Optional</sup> <a name="dialectVersionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.dialectVersionInput"></a>

```typescript
public readonly dialectVersionInput: string;
```

- *Type:* string

---

##### `validationConnectionInput`<sup>Optional</sup> <a name="validationConnectionInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.validationConnectionInput"></a>

```typescript
public readonly validationConnectionInput: string;
```

- *Type:* string

---

##### `viewExpandedTextInput`<sup>Optional</sup> <a name="viewExpandedTextInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.viewExpandedTextInput"></a>

```typescript
public readonly viewExpandedTextInput: string;
```

- *Type:* string

---

##### `viewOriginalTextInput`<sup>Optional</sup> <a name="viewOriginalTextInput" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.viewOriginalTextInput"></a>

```typescript
public readonly viewOriginalTextInput: string;
```

- *Type:* string

---

##### `dialect`<sup>Required</sup> <a name="dialect" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.dialect"></a>

```typescript
public readonly dialect: string;
```

- *Type:* string

---

##### `dialectVersion`<sup>Required</sup> <a name="dialectVersion" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.dialectVersion"></a>

```typescript
public readonly dialectVersion: string;
```

- *Type:* string

---

##### `validationConnection`<sup>Required</sup> <a name="validationConnection" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.validationConnection"></a>

```typescript
public readonly validationConnection: string;
```

- *Type:* string

---

##### `viewExpandedText`<sup>Required</sup> <a name="viewExpandedText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.viewExpandedText"></a>

```typescript
public readonly viewExpandedText: string;
```

- *Type:* string

---

##### `viewOriginalText`<sup>Required</sup> <a name="viewOriginalText" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.viewOriginalText"></a>

```typescript
public readonly viewOriginalText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTableViewDefinitionRepresentations;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalogTable.GlueCatalogTableViewDefinitionRepresentations">GlueCatalogTableViewDefinitionRepresentations</a>

---



