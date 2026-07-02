# `glueCatalog` Submodule <a name="`glueCatalog` Submodule" id="@cdktn/provider-aws.glueCatalog"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GlueCatalog <a name="GlueCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog aws_glue_catalog}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalog(scope: Construct, id: string, config: GlueCatalogConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig">GlueCatalogConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig">GlueCatalogConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putCatalogProperties">putCatalogProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions">putCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions">putCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putFederatedCatalog">putFederatedCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putTargetRedshiftCatalog">putTargetRedshiftCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetAllowFullTableExternalDataAccess">resetAllowFullTableExternalDataAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCatalogProperties">resetCatalogProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCreateDatabaseDefaultPermissions">resetCreateDatabaseDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCreateTableDefaultPermissions">resetCreateTableDefaultPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetFederatedCatalog">resetFederatedCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetOverwriteChildResourcePermissionsWithDefault">resetOverwriteChildResourcePermissionsWithDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTargetRedshiftCatalog">resetTargetRedshiftCatalog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCatalogProperties` <a name="putCatalogProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCatalogProperties"></a>

```typescript
public putCatalogProperties(value: IResolvable | GlueCatalogCatalogProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCatalogProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>[]

---

##### `putCreateDatabaseDefaultPermissions` <a name="putCreateDatabaseDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions"></a>

```typescript
public putCreateDatabaseDefaultPermissions(value: IResolvable | GlueCatalogCreateDatabaseDefaultPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateDatabaseDefaultPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>[]

---

##### `putCreateTableDefaultPermissions` <a name="putCreateTableDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions"></a>

```typescript
public putCreateTableDefaultPermissions(value: IResolvable | GlueCatalogCreateTableDefaultPermissions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putCreateTableDefaultPermissions.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>[]

---

##### `putFederatedCatalog` <a name="putFederatedCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putFederatedCatalog"></a>

```typescript
public putFederatedCatalog(value: IResolvable | GlueCatalogFederatedCatalog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putFederatedCatalog.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>[]

---

##### `putTargetRedshiftCatalog` <a name="putTargetRedshiftCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTargetRedshiftCatalog"></a>

```typescript
public putTargetRedshiftCatalog(value: IResolvable | GlueCatalogTargetRedshiftCatalog[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTargetRedshiftCatalog.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTimeouts"></a>

```typescript
public putTimeouts(value: GlueCatalogTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a>

---

##### `resetAllowFullTableExternalDataAccess` <a name="resetAllowFullTableExternalDataAccess" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetAllowFullTableExternalDataAccess"></a>

```typescript
public resetAllowFullTableExternalDataAccess(): void
```

##### `resetCatalogProperties` <a name="resetCatalogProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCatalogProperties"></a>

```typescript
public resetCatalogProperties(): void
```

##### `resetCreateDatabaseDefaultPermissions` <a name="resetCreateDatabaseDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCreateDatabaseDefaultPermissions"></a>

```typescript
public resetCreateDatabaseDefaultPermissions(): void
```

##### `resetCreateTableDefaultPermissions` <a name="resetCreateTableDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetCreateTableDefaultPermissions"></a>

```typescript
public resetCreateTableDefaultPermissions(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFederatedCatalog` <a name="resetFederatedCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetFederatedCatalog"></a>

```typescript
public resetFederatedCatalog(): void
```

##### `resetOverwriteChildResourcePermissionsWithDefault` <a name="resetOverwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetOverwriteChildResourcePermissionsWithDefault"></a>

```typescript
public resetOverwriteChildResourcePermissionsWithDefault(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTargetRedshiftCatalog` <a name="resetTargetRedshiftCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTargetRedshiftCatalog"></a>

```typescript
public resetTargetRedshiftCatalog(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isConstruct"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

glueCatalog.GlueCatalog.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformElement"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

glueCatalog.GlueCatalog.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformResource"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

glueCatalog.GlueCatalog.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

glueCatalog.GlueCatalog.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a GlueCatalog resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GlueCatalog to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GlueCatalog that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the GlueCatalog to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogId">catalogId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogProperties">catalogProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList">GlueCatalogCatalogPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList">GlueCatalogCreateDatabaseDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList">GlueCatalogCreateTableDefaultPermissionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.federatedCatalog">federatedCatalog</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList">GlueCatalogFederatedCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.targetRedshiftCatalog">targetRedshiftCatalog</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList">GlueCatalogTargetRedshiftCatalogList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference">GlueCatalogTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccessInput">allowFullTableExternalDataAccessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogPropertiesInput">catalogPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissionsInput">createDatabaseDefaultPermissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTableDefaultPermissionsInput">createTableDefaultPermissionsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.federatedCatalogInput">federatedCatalogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefaultInput">overwriteChildResourcePermissionsWithDefaultInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.targetRedshiftCatalogInput">targetRedshiftCatalogInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefault">overwriteChildResourcePermissionsWithDefault</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `catalogId`<sup>Required</sup> <a name="catalogId" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogId"></a>

```typescript
public readonly catalogId: string;
```

- *Type:* string

---

##### `catalogProperties`<sup>Required</sup> <a name="catalogProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogProperties"></a>

```typescript
public readonly catalogProperties: GlueCatalogCatalogPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList">GlueCatalogCatalogPropertiesList</a>

---

##### `createDatabaseDefaultPermissions`<sup>Required</sup> <a name="createDatabaseDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissions"></a>

```typescript
public readonly createDatabaseDefaultPermissions: GlueCatalogCreateDatabaseDefaultPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList">GlueCatalogCreateDatabaseDefaultPermissionsList</a>

---

##### `createTableDefaultPermissions`<sup>Required</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: GlueCatalogCreateTableDefaultPermissionsList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList">GlueCatalogCreateTableDefaultPermissionsList</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `federatedCatalog`<sup>Required</sup> <a name="federatedCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.federatedCatalog"></a>

```typescript
public readonly federatedCatalog: GlueCatalogFederatedCatalogList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList">GlueCatalogFederatedCatalogList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `targetRedshiftCatalog`<sup>Required</sup> <a name="targetRedshiftCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.targetRedshiftCatalog"></a>

```typescript
public readonly targetRedshiftCatalog: GlueCatalogTargetRedshiftCatalogList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList">GlueCatalogTargetRedshiftCatalogList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.timeouts"></a>

```typescript
public readonly timeouts: GlueCatalogTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference">GlueCatalogTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `allowFullTableExternalDataAccessInput`<sup>Optional</sup> <a name="allowFullTableExternalDataAccessInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccessInput"></a>

```typescript
public readonly allowFullTableExternalDataAccessInput: string;
```

- *Type:* string

---

##### `catalogPropertiesInput`<sup>Optional</sup> <a name="catalogPropertiesInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.catalogPropertiesInput"></a>

```typescript
public readonly catalogPropertiesInput: IResolvable | GlueCatalogCatalogProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>[]

---

##### `createDatabaseDefaultPermissionsInput`<sup>Optional</sup> <a name="createDatabaseDefaultPermissionsInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createDatabaseDefaultPermissionsInput"></a>

```typescript
public readonly createDatabaseDefaultPermissionsInput: IResolvable | GlueCatalogCreateDatabaseDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>[]

---

##### `createTableDefaultPermissionsInput`<sup>Optional</sup> <a name="createTableDefaultPermissionsInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.createTableDefaultPermissionsInput"></a>

```typescript
public readonly createTableDefaultPermissionsInput: IResolvable | GlueCatalogCreateTableDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `federatedCatalogInput`<sup>Optional</sup> <a name="federatedCatalogInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.federatedCatalogInput"></a>

```typescript
public readonly federatedCatalogInput: IResolvable | GlueCatalogFederatedCatalog[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `overwriteChildResourcePermissionsWithDefaultInput`<sup>Optional</sup> <a name="overwriteChildResourcePermissionsWithDefaultInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefaultInput"></a>

```typescript
public readonly overwriteChildResourcePermissionsWithDefaultInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetRedshiftCatalogInput`<sup>Optional</sup> <a name="targetRedshiftCatalogInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.targetRedshiftCatalogInput"></a>

```typescript
public readonly targetRedshiftCatalogInput: IResolvable | GlueCatalogTargetRedshiftCatalog[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GlueCatalogTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a>

---

##### `allowFullTableExternalDataAccess`<sup>Required</sup> <a name="allowFullTableExternalDataAccess" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.allowFullTableExternalDataAccess"></a>

```typescript
public readonly allowFullTableExternalDataAccess: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `overwriteChildResourcePermissionsWithDefault`<sup>Required</sup> <a name="overwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.overwriteChildResourcePermissionsWithDefault"></a>

```typescript
public readonly overwriteChildResourcePermissionsWithDefault: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.glueCatalog.GlueCatalog.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GlueCatalogCatalogProperties <a name="GlueCatalogCatalogProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogCatalogProperties: glueCatalog.GlueCatalogCatalogProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.customProperties">customProperties</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#custom_properties GlueCatalog#custom_properties}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.dataLakeAccessProperties">dataLakeAccessProperties</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>[]</code> | data_lake_access_properties block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.icebergOptimizationProperties">icebergOptimizationProperties</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>[]</code> | iceberg_optimization_properties block. |

---

##### `customProperties`<sup>Optional</sup> <a name="customProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.customProperties"></a>

```typescript
public readonly customProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#custom_properties GlueCatalog#custom_properties}.

---

##### `dataLakeAccessProperties`<sup>Optional</sup> <a name="dataLakeAccessProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.dataLakeAccessProperties"></a>

```typescript
public readonly dataLakeAccessProperties: IResolvable | GlueCatalogCatalogPropertiesDataLakeAccessProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>[]

data_lake_access_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_access_properties GlueCatalog#data_lake_access_properties}

---

##### `icebergOptimizationProperties`<sup>Optional</sup> <a name="icebergOptimizationProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties.property.icebergOptimizationProperties"></a>

```typescript
public readonly icebergOptimizationProperties: IResolvable | GlueCatalogCatalogPropertiesIcebergOptimizationProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>[]

iceberg_optimization_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#iceberg_optimization_properties GlueCatalog#iceberg_optimization_properties}

---

### GlueCatalogCatalogPropertiesDataLakeAccessProperties <a name="GlueCatalogCatalogPropertiesDataLakeAccessProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogCatalogPropertiesDataLakeAccessProperties: glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.catalogType">catalogType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_type GlueCatalog#catalog_type}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataLakeAccess">dataLakeAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_access GlueCatalog#data_lake_access}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataTransferRole">dataTransferRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_transfer_role GlueCatalog#data_transfer_role}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.kmsKey">kmsKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#kms_key GlueCatalog#kms_key}. |

---

##### `catalogType`<sup>Optional</sup> <a name="catalogType" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_type GlueCatalog#catalog_type}.

---

##### `dataLakeAccess`<sup>Optional</sup> <a name="dataLakeAccess" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataLakeAccess"></a>

```typescript
public readonly dataLakeAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_access GlueCatalog#data_lake_access}.

---

##### `dataTransferRole`<sup>Optional</sup> <a name="dataTransferRole" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.dataTransferRole"></a>

```typescript
public readonly dataTransferRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_transfer_role GlueCatalog#data_transfer_role}.

---

##### `kmsKey`<sup>Optional</sup> <a name="kmsKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#kms_key GlueCatalog#kms_key}.

---

### GlueCatalogCatalogPropertiesIcebergOptimizationProperties <a name="GlueCatalogCatalogPropertiesIcebergOptimizationProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogCatalogPropertiesIcebergOptimizationProperties: glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.compaction">compaction</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#compaction GlueCatalog#compaction}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.orphanFileDeletion">orphanFileDeletion</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#orphan_file_deletion GlueCatalog#orphan_file_deletion}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.retention">retention</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#retention GlueCatalog#retention}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.roleArn">roleArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#role_arn GlueCatalog#role_arn}. |

---

##### `compaction`<sup>Optional</sup> <a name="compaction" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.compaction"></a>

```typescript
public readonly compaction: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#compaction GlueCatalog#compaction}.

---

##### `orphanFileDeletion`<sup>Optional</sup> <a name="orphanFileDeletion" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.orphanFileDeletion"></a>

```typescript
public readonly orphanFileDeletion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#orphan_file_deletion GlueCatalog#orphan_file_deletion}.

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.retention"></a>

```typescript
public readonly retention: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#retention GlueCatalog#retention}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#role_arn GlueCatalog#role_arn}.

---

### GlueCatalogConfig <a name="GlueCatalogConfig" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogConfig: glueCatalog.GlueCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#name GlueCatalog#name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.allowFullTableExternalDataAccess">allowFullTableExternalDataAccess</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.catalogProperties">catalogProperties</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>[]</code> | catalog_properties block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.createDatabaseDefaultPermissions">createDatabaseDefaultPermissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>[]</code> | create_database_default_permissions block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.createTableDefaultPermissions">createTableDefaultPermissions</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>[]</code> | create_table_default_permissions block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#description GlueCatalog#description}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.federatedCatalog">federatedCatalog</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>[]</code> | federated_catalog block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.overwriteChildResourcePermissionsWithDefault">overwriteChildResourcePermissionsWithDefault</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#tags GlueCatalog#tags}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.targetRedshiftCatalog">targetRedshiftCatalog</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>[]</code> | target_redshift_catalog block. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#name GlueCatalog#name}.

---

##### `allowFullTableExternalDataAccess`<sup>Optional</sup> <a name="allowFullTableExternalDataAccess" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.allowFullTableExternalDataAccess"></a>

```typescript
public readonly allowFullTableExternalDataAccess: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#allow_full_table_external_data_access GlueCatalog#allow_full_table_external_data_access}.

---

##### `catalogProperties`<sup>Optional</sup> <a name="catalogProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.catalogProperties"></a>

```typescript
public readonly catalogProperties: IResolvable | GlueCatalogCatalogProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>[]

catalog_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_properties GlueCatalog#catalog_properties}

---

##### `createDatabaseDefaultPermissions`<sup>Optional</sup> <a name="createDatabaseDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.createDatabaseDefaultPermissions"></a>

```typescript
public readonly createDatabaseDefaultPermissions: IResolvable | GlueCatalogCreateDatabaseDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>[]

create_database_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create_database_default_permissions GlueCatalog#create_database_default_permissions}

---

##### `createTableDefaultPermissions`<sup>Optional</sup> <a name="createTableDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.createTableDefaultPermissions"></a>

```typescript
public readonly createTableDefaultPermissions: IResolvable | GlueCatalogCreateTableDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>[]

create_table_default_permissions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create_table_default_permissions GlueCatalog#create_table_default_permissions}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#description GlueCatalog#description}.

---

##### `federatedCatalog`<sup>Optional</sup> <a name="federatedCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.federatedCatalog"></a>

```typescript
public readonly federatedCatalog: IResolvable | GlueCatalogFederatedCatalog[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>[]

federated_catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#federated_catalog GlueCatalog#federated_catalog}

---

##### `overwriteChildResourcePermissionsWithDefault`<sup>Optional</sup> <a name="overwriteChildResourcePermissionsWithDefault" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.overwriteChildResourcePermissionsWithDefault"></a>

```typescript
public readonly overwriteChildResourcePermissionsWithDefault: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#overwrite_child_resource_permissions_with_default GlueCatalog#overwrite_child_resource_permissions_with_default}.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#parameters GlueCatalog#parameters}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#region GlueCatalog#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#tags GlueCatalog#tags}.

---

##### `targetRedshiftCatalog`<sup>Optional</sup> <a name="targetRedshiftCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.targetRedshiftCatalog"></a>

```typescript
public readonly targetRedshiftCatalog: IResolvable | GlueCatalogTargetRedshiftCatalog[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>[]

target_redshift_catalog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#target_redshift_catalog GlueCatalog#target_redshift_catalog}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalogConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GlueCatalogTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#timeouts GlueCatalog#timeouts}

---

### GlueCatalogCreateDatabaseDefaultPermissions <a name="GlueCatalogCreateDatabaseDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogCreateDatabaseDefaultPermissions: glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.permissions">permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.principal">principal</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>[]</code> | principal block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions.property.principal"></a>

```typescript
public readonly principal: IResolvable | GlueCatalogCreateDatabaseDefaultPermissionsPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#principal GlueCatalog#principal}

---

### GlueCatalogCreateDatabaseDefaultPermissionsPrincipal <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogCreateDatabaseDefaultPermissionsPrincipal: glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}. |

---

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}.

---

### GlueCatalogCreateTableDefaultPermissions <a name="GlueCatalogCreateTableDefaultPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogCreateTableDefaultPermissions: glueCatalog.GlueCatalogCreateTableDefaultPermissions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.permissions">permissions</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.principal">principal</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>[]</code> | principal block. |

---

##### `permissions`<sup>Optional</sup> <a name="permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#permissions GlueCatalog#permissions}.

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions.property.principal"></a>

```typescript
public readonly principal: IResolvable | GlueCatalogCreateTableDefaultPermissionsPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#principal GlueCatalog#principal}

---

### GlueCatalogCreateTableDefaultPermissionsPrincipal <a name="GlueCatalogCreateTableDefaultPermissionsPrincipal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogCreateTableDefaultPermissionsPrincipal: glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}. |

---

##### `dataLakePrincipalIdentifier`<sup>Optional</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#data_lake_principal_identifier GlueCatalog#data_lake_principal_identifier}.

---

### GlueCatalogFederatedCatalog <a name="GlueCatalogFederatedCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogFederatedCatalog: glueCatalog.GlueCatalogFederatedCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.connectionName">connectionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#connection_name GlueCatalog#connection_name}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.connectionType">connectionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#connection_type GlueCatalog#connection_type}. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.identifier">identifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#identifier GlueCatalog#identifier}. |

---

##### `connectionName`<sup>Optional</sup> <a name="connectionName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#connection_name GlueCatalog#connection_name}.

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#connection_type GlueCatalog#connection_type}.

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#identifier GlueCatalog#identifier}.

---

### GlueCatalogTargetRedshiftCatalog <a name="GlueCatalogTargetRedshiftCatalog" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogTargetRedshiftCatalog: glueCatalog.GlueCatalogTargetRedshiftCatalog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog.property.catalogArn">catalogArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_arn GlueCatalog#catalog_arn}. |

---

##### `catalogArn`<sup>Required</sup> <a name="catalogArn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog.property.catalogArn"></a>

```typescript
public readonly catalogArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#catalog_arn GlueCatalog#catalog_arn}.

---

### GlueCatalogTimeouts <a name="GlueCatalogTimeouts" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

const glueCatalogTimeouts: glueCatalog.GlueCatalogTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#create GlueCatalog#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#delete GlueCatalog#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/glue_catalog#update GlueCatalog#update}

---

## Classes <a name="Classes" id="Classes"></a>

### GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList <a name="GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get"></a>

```typescript
public get(index: number): GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCatalogPropertiesDataLakeAccessProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>[]

---


### GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetCatalogType">resetCatalogType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataLakeAccess">resetDataLakeAccess</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataTransferRole">resetDataTransferRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetKmsKey">resetKmsKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCatalogType` <a name="resetCatalogType" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetCatalogType"></a>

```typescript
public resetCatalogType(): void
```

##### `resetDataLakeAccess` <a name="resetDataLakeAccess" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataLakeAccess"></a>

```typescript
public resetDataLakeAccess(): void
```

##### `resetDataTransferRole` <a name="resetDataTransferRole" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetDataTransferRole"></a>

```typescript
public resetDataTransferRole(): void
```

##### `resetKmsKey` <a name="resetKmsKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.resetKmsKey"></a>

```typescript
public resetKmsKey(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName">managedWorkgroupName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus">managedWorkgroupStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName">redshiftDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage">statusMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogTypeInput">catalogTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccessInput">dataLakeAccessInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRoleInput">dataTransferRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType">catalogType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess">dataLakeAccess</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole">dataTransferRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedWorkgroupName`<sup>Required</sup> <a name="managedWorkgroupName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupName"></a>

```typescript
public readonly managedWorkgroupName: string;
```

- *Type:* string

---

##### `managedWorkgroupStatus`<sup>Required</sup> <a name="managedWorkgroupStatus" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.managedWorkgroupStatus"></a>

```typescript
public readonly managedWorkgroupStatus: string;
```

- *Type:* string

---

##### `redshiftDatabaseName`<sup>Required</sup> <a name="redshiftDatabaseName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.redshiftDatabaseName"></a>

```typescript
public readonly redshiftDatabaseName: string;
```

- *Type:* string

---

##### `statusMessage`<sup>Required</sup> <a name="statusMessage" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.statusMessage"></a>

```typescript
public readonly statusMessage: string;
```

- *Type:* string

---

##### `catalogTypeInput`<sup>Optional</sup> <a name="catalogTypeInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogTypeInput"></a>

```typescript
public readonly catalogTypeInput: string;
```

- *Type:* string

---

##### `dataLakeAccessInput`<sup>Optional</sup> <a name="dataLakeAccessInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccessInput"></a>

```typescript
public readonly dataLakeAccessInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataTransferRoleInput`<sup>Optional</sup> <a name="dataTransferRoleInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRoleInput"></a>

```typescript
public readonly dataTransferRoleInput: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `catalogType`<sup>Required</sup> <a name="catalogType" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.catalogType"></a>

```typescript
public readonly catalogType: string;
```

- *Type:* string

---

##### `dataLakeAccess`<sup>Required</sup> <a name="dataLakeAccess" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataLakeAccess"></a>

```typescript
public readonly dataLakeAccess: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `dataTransferRole`<sup>Required</sup> <a name="dataTransferRole" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.dataTransferRole"></a>

```typescript
public readonly dataTransferRole: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCatalogPropertiesDataLakeAccessProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>

---


### GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList <a name="GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get"></a>

```typescript
public get(index: number): GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCatalogPropertiesIcebergOptimizationProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>[]

---


### GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetCompaction">resetCompaction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetOrphanFileDeletion">resetOrphanFileDeletion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetRetention">resetRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompaction` <a name="resetCompaction" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetCompaction"></a>

```typescript
public resetCompaction(): void
```

##### `resetOrphanFileDeletion` <a name="resetOrphanFileDeletion" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetOrphanFileDeletion"></a>

```typescript
public resetOrphanFileDeletion(): void
```

##### `resetRetention` <a name="resetRetention" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetRetention"></a>

```typescript
public resetRetention(): void
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.resetRoleArn"></a>

```typescript
public resetRoleArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compactionInput">compactionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletionInput">orphanFileDeletionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retentionInput">retentionInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction">compaction</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion">orphanFileDeletion</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention">retention</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn">roleArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `compactionInput`<sup>Optional</sup> <a name="compactionInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compactionInput"></a>

```typescript
public readonly compactionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `orphanFileDeletionInput`<sup>Optional</sup> <a name="orphanFileDeletionInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletionInput"></a>

```typescript
public readonly orphanFileDeletionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retentionInput"></a>

```typescript
public readonly retentionInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArnInput"></a>

```typescript
public readonly roleArnInput: string;
```

- *Type:* string

---

##### `compaction`<sup>Required</sup> <a name="compaction" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.compaction"></a>

```typescript
public readonly compaction: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `orphanFileDeletion`<sup>Required</sup> <a name="orphanFileDeletion" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.orphanFileDeletion"></a>

```typescript
public readonly orphanFileDeletion: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.retention"></a>

```typescript
public readonly retention: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.roleArn"></a>

```typescript
public readonly roleArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCatalogPropertiesIcebergOptimizationProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>

---


### GlueCatalogCatalogPropertiesList <a name="GlueCatalogCatalogPropertiesList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCatalogPropertiesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.get"></a>

```typescript
public get(index: number): GlueCatalogCatalogPropertiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCatalogProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>[]

---


### GlueCatalogCatalogPropertiesOutputReference <a name="GlueCatalogCatalogPropertiesOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCatalogPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties">putDataLakeAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putIcebergOptimizationProperties">putIcebergOptimizationProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetCustomProperties">resetCustomProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetDataLakeAccessProperties">resetDataLakeAccessProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetIcebergOptimizationProperties">resetIcebergOptimizationProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataLakeAccessProperties` <a name="putDataLakeAccessProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties"></a>

```typescript
public putDataLakeAccessProperties(value: IResolvable | GlueCatalogCatalogPropertiesDataLakeAccessProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putDataLakeAccessProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>[]

---

##### `putIcebergOptimizationProperties` <a name="putIcebergOptimizationProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putIcebergOptimizationProperties"></a>

```typescript
public putIcebergOptimizationProperties(value: IResolvable | GlueCatalogCatalogPropertiesIcebergOptimizationProperties[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.putIcebergOptimizationProperties.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>[]

---

##### `resetCustomProperties` <a name="resetCustomProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetCustomProperties"></a>

```typescript
public resetCustomProperties(): void
```

##### `resetDataLakeAccessProperties` <a name="resetDataLakeAccessProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetDataLakeAccessProperties"></a>

```typescript
public resetDataLakeAccessProperties(): void
```

##### `resetIcebergOptimizationProperties` <a name="resetIcebergOptimizationProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.resetIcebergOptimizationProperties"></a>

```typescript
public resetIcebergOptimizationProperties(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties">dataLakeAccessProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties">icebergOptimizationProperties</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customPropertiesInput">customPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessPropertiesInput">dataLakeAccessPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationPropertiesInput">icebergOptimizationPropertiesInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customProperties">customProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakeAccessProperties`<sup>Required</sup> <a name="dataLakeAccessProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessProperties"></a>

```typescript
public readonly dataLakeAccessProperties: GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList">GlueCatalogCatalogPropertiesDataLakeAccessPropertiesList</a>

---

##### `icebergOptimizationProperties`<sup>Required</sup> <a name="icebergOptimizationProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationProperties"></a>

```typescript
public readonly icebergOptimizationProperties: GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList">GlueCatalogCatalogPropertiesIcebergOptimizationPropertiesList</a>

---

##### `customPropertiesInput`<sup>Optional</sup> <a name="customPropertiesInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customPropertiesInput"></a>

```typescript
public readonly customPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `dataLakeAccessPropertiesInput`<sup>Optional</sup> <a name="dataLakeAccessPropertiesInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.dataLakeAccessPropertiesInput"></a>

```typescript
public readonly dataLakeAccessPropertiesInput: IResolvable | GlueCatalogCatalogPropertiesDataLakeAccessProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesDataLakeAccessProperties">GlueCatalogCatalogPropertiesDataLakeAccessProperties</a>[]

---

##### `icebergOptimizationPropertiesInput`<sup>Optional</sup> <a name="icebergOptimizationPropertiesInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.icebergOptimizationPropertiesInput"></a>

```typescript
public readonly icebergOptimizationPropertiesInput: IResolvable | GlueCatalogCatalogPropertiesIcebergOptimizationProperties[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesIcebergOptimizationProperties">GlueCatalogCatalogPropertiesIcebergOptimizationProperties</a>[]

---

##### `customProperties`<sup>Required</sup> <a name="customProperties" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.customProperties"></a>

```typescript
public readonly customProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCatalogProperties;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCatalogProperties">GlueCatalogCatalogProperties</a>

---


### GlueCatalogCreateDatabaseDefaultPermissionsList <a name="GlueCatalogCreateDatabaseDefaultPermissionsList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get"></a>

```typescript
public get(index: number): GlueCatalogCreateDatabaseDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCreateDatabaseDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>[]

---


### GlueCatalogCreateDatabaseDefaultPermissionsOutputReference <a name="GlueCatalogCreateDatabaseDefaultPermissionsOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal"></a>

```typescript
public putPrincipal(value: IResolvable | GlueCatalogCreateDatabaseDefaultPermissionsPrincipal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>[]

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList">GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | GlueCatalogCreateDatabaseDefaultPermissionsPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCreateDatabaseDefaultPermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissions">GlueCatalogCreateDatabaseDefaultPermissions</a>

---


### GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get"></a>

```typescript
public get(index: number): GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCreateDatabaseDefaultPermissionsPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>[]

---


### GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference <a name="GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">resetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLakePrincipalIdentifier` <a name="resetDataLakePrincipalIdentifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```typescript
public resetDataLakePrincipalIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```typescript
public readonly dataLakePrincipalIdentifierInput: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCreateDatabaseDefaultPermissionsPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateDatabaseDefaultPermissionsPrincipal">GlueCatalogCreateDatabaseDefaultPermissionsPrincipal</a>

---


### GlueCatalogCreateTableDefaultPermissionsList <a name="GlueCatalogCreateTableDefaultPermissionsList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCreateTableDefaultPermissionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get"></a>

```typescript
public get(index: number): GlueCatalogCreateTableDefaultPermissionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCreateTableDefaultPermissions[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>[]

---


### GlueCatalogCreateTableDefaultPermissionsOutputReference <a name="GlueCatalogCreateTableDefaultPermissionsOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPermissions">resetPermissions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPrincipal">resetPrincipal</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal"></a>

```typescript
public putPrincipal(value: IResolvable | GlueCatalogCreateTableDefaultPermissionsPrincipal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>[]

---

##### `resetPermissions` <a name="resetPermissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPermissions"></a>

```typescript
public resetPermissions(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList">GlueCatalogCreateTableDefaultPermissionsPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissionsInput">permissionsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions">permissions</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principal"></a>

```typescript
public readonly principal: GlueCatalogCreateTableDefaultPermissionsPrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList">GlueCatalogCreateTableDefaultPermissionsPrincipalList</a>

---

##### `permissionsInput`<sup>Optional</sup> <a name="permissionsInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissionsInput"></a>

```typescript
public readonly permissionsInput: string[];
```

- *Type:* string[]

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | GlueCatalogCreateTableDefaultPermissionsPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>[]

---

##### `permissions`<sup>Required</sup> <a name="permissions" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.permissions"></a>

```typescript
public readonly permissions: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCreateTableDefaultPermissions;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissions">GlueCatalogCreateTableDefaultPermissions</a>

---


### GlueCatalogCreateTableDefaultPermissionsPrincipalList <a name="GlueCatalogCreateTableDefaultPermissionsPrincipalList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.get"></a>

```typescript
public get(index: number): GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCreateTableDefaultPermissionsPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>[]

---


### GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference <a name="GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier">resetDataLakePrincipalIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataLakePrincipalIdentifier` <a name="resetDataLakePrincipalIdentifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.resetDataLakePrincipalIdentifier"></a>

```typescript
public resetDataLakePrincipalIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput">dataLakePrincipalIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier">dataLakePrincipalIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifierInput`<sup>Optional</sup> <a name="dataLakePrincipalIdentifierInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifierInput"></a>

```typescript
public readonly dataLakePrincipalIdentifierInput: string;
```

- *Type:* string

---

##### `dataLakePrincipalIdentifier`<sup>Required</sup> <a name="dataLakePrincipalIdentifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.dataLakePrincipalIdentifier"></a>

```typescript
public readonly dataLakePrincipalIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogCreateTableDefaultPermissionsPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogCreateTableDefaultPermissionsPrincipal">GlueCatalogCreateTableDefaultPermissionsPrincipal</a>

---


### GlueCatalogFederatedCatalogList <a name="GlueCatalogFederatedCatalogList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogFederatedCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.get"></a>

```typescript
public get(index: number): GlueCatalogFederatedCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogFederatedCatalog[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>[]

---


### GlueCatalogFederatedCatalogOutputReference <a name="GlueCatalogFederatedCatalogOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogFederatedCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionName">resetConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetIdentifier">resetIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionName` <a name="resetConnectionName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionName"></a>

```typescript
public resetConnectionName(): void
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetConnectionType"></a>

```typescript
public resetConnectionType(): void
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.resetIdentifier"></a>

```typescript
public resetIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionNameInput">connectionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifierInput">identifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionName">connectionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionType">connectionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifier">identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionNameInput`<sup>Optional</sup> <a name="connectionNameInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionNameInput"></a>

```typescript
public readonly connectionNameInput: string;
```

- *Type:* string

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionTypeInput"></a>

```typescript
public readonly connectionTypeInput: string;
```

- *Type:* string

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifierInput"></a>

```typescript
public readonly identifierInput: string;
```

- *Type:* string

---

##### `connectionName`<sup>Required</sup> <a name="connectionName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionName"></a>

```typescript
public readonly connectionName: string;
```

- *Type:* string

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.connectionType"></a>

```typescript
public readonly connectionType: string;
```

- *Type:* string

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.identifier"></a>

```typescript
public readonly identifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogFederatedCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogFederatedCatalog">GlueCatalogFederatedCatalog</a>

---


### GlueCatalogTargetRedshiftCatalogList <a name="GlueCatalogTargetRedshiftCatalogList" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogTargetRedshiftCatalogList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.get"></a>

```typescript
public get(index: number): GlueCatalogTargetRedshiftCatalogOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTargetRedshiftCatalog[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>[]

---


### GlueCatalogTargetRedshiftCatalogOutputReference <a name="GlueCatalogTargetRedshiftCatalogOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArnInput">catalogArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn">catalogArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `catalogArnInput`<sup>Optional</sup> <a name="catalogArnInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArnInput"></a>

```typescript
public readonly catalogArnInput: string;
```

- *Type:* string

---

##### `catalogArn`<sup>Required</sup> <a name="catalogArn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.catalogArn"></a>

```typescript
public readonly catalogArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTargetRedshiftCatalog;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTargetRedshiftCatalog">GlueCatalogTargetRedshiftCatalog</a>

---


### GlueCatalogTimeoutsOutputReference <a name="GlueCatalogTimeoutsOutputReference" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer"></a>

```typescript
import { glueCatalog } from '@cdktn/provider-aws'

new glueCatalog.GlueCatalogTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.glueCatalog.GlueCatalogTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GlueCatalogTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.glueCatalog.GlueCatalogTimeouts">GlueCatalogTimeouts</a>

---



