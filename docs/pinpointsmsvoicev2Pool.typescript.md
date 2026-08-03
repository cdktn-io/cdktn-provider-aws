# `pinpointsmsvoicev2Pool` Submodule <a name="`pinpointsmsvoicev2Pool` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2Pool <a name="Pinpointsmsvoicev2Pool" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool aws_pinpointsmsvoicev2_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer"></a>

```typescript
import { pinpointsmsvoicev2Pool } from '@cdktn/provider-aws'

new pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool(scope: Construct, id: string, config: Pinpointsmsvoicev2PoolConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig">Pinpointsmsvoicev2PoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig">Pinpointsmsvoicev2PoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode">resetIsoCountryCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName">resetOptOutListName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled">resetSelfManagedOptOutsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled">resetSharedRoutesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn">resetTwoWayChannelArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole">resetTwoWayChannelRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled">resetTwoWayEnabled</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts"></a>

```typescript
public putTimeouts(value: Pinpointsmsvoicev2PoolTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetIsoCountryCode` <a name="resetIsoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetIsoCountryCode"></a>

```typescript
public resetIsoCountryCode(): void
```

##### `resetOptOutListName` <a name="resetOptOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetOptOutListName"></a>

```typescript
public resetOptOutListName(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSelfManagedOptOutsEnabled` <a name="resetSelfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSelfManagedOptOutsEnabled"></a>

```typescript
public resetSelfManagedOptOutsEnabled(): void
```

##### `resetSharedRoutesEnabled` <a name="resetSharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetSharedRoutesEnabled"></a>

```typescript
public resetSharedRoutesEnabled(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTwoWayChannelArn` <a name="resetTwoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelArn"></a>

```typescript
public resetTwoWayChannelArn(): void
```

##### `resetTwoWayChannelRole` <a name="resetTwoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayChannelRole"></a>

```typescript
public resetTwoWayChannelRole(): void
```

##### `resetTwoWayEnabled` <a name="resetTwoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.resetTwoWayEnabled"></a>

```typescript
public resetTwoWayEnabled(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct"></a>

```typescript
import { pinpointsmsvoicev2Pool } from '@cdktn/provider-aws'

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement"></a>

```typescript
import { pinpointsmsvoicev2Pool } from '@cdktn/provider-aws'

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource"></a>

```typescript
import { pinpointsmsvoicev2Pool } from '@cdktn/provider-aws'

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport"></a>

```typescript
import { pinpointsmsvoicev2Pool } from '@cdktn/provider-aws'

pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2Pool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2Pool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2Pool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2Pool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput">isoCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput">messageTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput">optOutListNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput">originationIdentitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput">selfManagedOptOutsEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput">sharedRoutesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput">twoWayChannelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput">twoWayChannelRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput">twoWayEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType">messageType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName">optOutListName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities">originationIdentities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled">sharedRoutesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled">twoWayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeouts"></a>

```typescript
public readonly timeouts: Pinpointsmsvoicev2PoolTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference">Pinpointsmsvoicev2PoolTimeoutsOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isoCountryCodeInput`<sup>Optional</sup> <a name="isoCountryCodeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCodeInput"></a>

```typescript
public readonly isoCountryCodeInput: string;
```

- *Type:* string

---

##### `messageTypeInput`<sup>Optional</sup> <a name="messageTypeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageTypeInput"></a>

```typescript
public readonly messageTypeInput: string;
```

- *Type:* string

---

##### `optOutListNameInput`<sup>Optional</sup> <a name="optOutListNameInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListNameInput"></a>

```typescript
public readonly optOutListNameInput: string;
```

- *Type:* string

---

##### `originationIdentitiesInput`<sup>Optional</sup> <a name="originationIdentitiesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentitiesInput"></a>

```typescript
public readonly originationIdentitiesInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabledInput`<sup>Optional</sup> <a name="selfManagedOptOutsEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabledInput"></a>

```typescript
public readonly selfManagedOptOutsEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sharedRoutesEnabledInput`<sup>Optional</sup> <a name="sharedRoutesEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabledInput"></a>

```typescript
public readonly sharedRoutesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Pinpointsmsvoicev2PoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---

##### `twoWayChannelArnInput`<sup>Optional</sup> <a name="twoWayChannelArnInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArnInput"></a>

```typescript
public readonly twoWayChannelArnInput: string;
```

- *Type:* string

---

##### `twoWayChannelRoleInput`<sup>Optional</sup> <a name="twoWayChannelRoleInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRoleInput"></a>

```typescript
public readonly twoWayChannelRoleInput: string;
```

- *Type:* string

---

##### `twoWayEnabledInput`<sup>Optional</sup> <a name="twoWayEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabledInput"></a>

```typescript
public readonly twoWayEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

---

##### `optOutListName`<sup>Required</sup> <a name="optOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

---

##### `originationIdentities`<sup>Required</sup> <a name="originationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.originationIdentities"></a>

```typescript
public readonly originationIdentities: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `selfManagedOptOutsEnabled`<sup>Required</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `sharedRoutesEnabled`<sup>Required</sup> <a name="sharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.sharedRoutesEnabled"></a>

```typescript
public readonly sharedRoutesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `twoWayChannelArn`<sup>Required</sup> <a name="twoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelArn"></a>

```typescript
public readonly twoWayChannelArn: string;
```

- *Type:* string

---

##### `twoWayChannelRole`<sup>Required</sup> <a name="twoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayChannelRole"></a>

```typescript
public readonly twoWayChannelRole: string;
```

- *Type:* string

---

##### `twoWayEnabled`<sup>Required</sup> <a name="twoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.twoWayEnabled"></a>

```typescript
public readonly twoWayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2Pool.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2PoolConfig <a name="Pinpointsmsvoicev2PoolConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.Initializer"></a>

```typescript
import { pinpointsmsvoicev2Pool } from '@cdktn/provider-aws'

const pinpointsmsvoicev2PoolConfig: pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType">messageType</a></code> | <code>string</code> | Type of message. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities">originationIdentities</a></code> | <code>string[]</code> | Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether deletion protection is enabled. When `true`, the pool cannot be deleted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName">optOutListName</a></code> | <code>string</code> | Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled">selfManagedOptOutsEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether the pool relies on self-managed opt-out handling. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled">sharedRoutesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether shared routes are enabled for the pool. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn">twoWayChannelArn</a></code> | <code>string</code> | ARN of the two-way channel that receives inbound messages. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole">twoWayChannelRole</a></code> | <code>string</code> | ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled">twoWayEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Whether inbound message reception is enabled for the pool. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `messageType`<sup>Required</sup> <a name="messageType" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.messageType"></a>

```typescript
public readonly messageType: string;
```

- *Type:* string

Type of message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#message_type Pinpointsmsvoicev2Pool#message_type}

---

##### `originationIdentities`<sup>Required</sup> <a name="originationIdentities" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.originationIdentities"></a>

```typescript
public readonly originationIdentities: string[];
```

- *Type:* string[]

Set of origination identity ARNs to associate with the pool. At least one origination identity is required at creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#origination_identities Pinpointsmsvoicev2Pool#origination_identities}

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether deletion protection is enabled. When `true`, the pool cannot be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#deletion_protection_enabled Pinpointsmsvoicev2Pool#deletion_protection_enabled}

---

##### `isoCountryCode`<sup>Optional</sup> <a name="isoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

Two-character code, in ISO 3166-1 alpha-2 format, for the country or region of the pool.

This field is optional for origination identity types that are not country-specific.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#iso_country_code Pinpointsmsvoicev2Pool#iso_country_code}

---

##### `optOutListName`<sup>Optional</sup> <a name="optOutListName" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.optOutListName"></a>

```typescript
public readonly optOutListName: string;
```

- *Type:* string

Name of the opt-out list to associate with the pool. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#opt_out_list_name Pinpointsmsvoicev2Pool#opt_out_list_name}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#region Pinpointsmsvoicev2Pool#region}

---

##### `selfManagedOptOutsEnabled`<sup>Optional</sup> <a name="selfManagedOptOutsEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.selfManagedOptOutsEnabled"></a>

```typescript
public readonly selfManagedOptOutsEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether the pool relies on self-managed opt-out handling.

When `false`, AWS auto-replies to HELP/STOP requests and manages the opt-out list. Inherited from the initial origination identity when omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#self_managed_opt_outs_enabled Pinpointsmsvoicev2Pool#self_managed_opt_outs_enabled}

---

##### `sharedRoutesEnabled`<sup>Optional</sup> <a name="sharedRoutesEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.sharedRoutesEnabled"></a>

```typescript
public readonly sharedRoutesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether shared routes are enabled for the pool.

When `true`, messages may use shared phone numbers or sender IDs in countries that allow it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#shared_routes_enabled Pinpointsmsvoicev2Pool#shared_routes_enabled}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#tags Pinpointsmsvoicev2Pool#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Pinpointsmsvoicev2PoolTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#timeouts Pinpointsmsvoicev2Pool#timeouts}

---

##### `twoWayChannelArn`<sup>Optional</sup> <a name="twoWayChannelArn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelArn"></a>

```typescript
public readonly twoWayChannelArn: string;
```

- *Type:* string

ARN of the two-way channel that receives inbound messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_arn Pinpointsmsvoicev2Pool#two_way_channel_arn}

---

##### `twoWayChannelRole`<sup>Optional</sup> <a name="twoWayChannelRole" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayChannelRole"></a>

```typescript
public readonly twoWayChannelRole: string;
```

- *Type:* string

ARN of the IAM role that End User Messaging SMS assumes to publish inbound messages to the two-way channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_channel_role Pinpointsmsvoicev2Pool#two_way_channel_role}

---

##### `twoWayEnabled`<sup>Optional</sup> <a name="twoWayEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolConfig.property.twoWayEnabled"></a>

```typescript
public readonly twoWayEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Whether inbound message reception is enabled for the pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#two_way_enabled Pinpointsmsvoicev2Pool#two_way_enabled}

---

### Pinpointsmsvoicev2PoolTimeouts <a name="Pinpointsmsvoicev2PoolTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.Initializer"></a>

```typescript
import { pinpointsmsvoicev2Pool } from '@cdktn/provider-aws'

const pinpointsmsvoicev2PoolTimeouts: pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#create Pinpointsmsvoicev2Pool#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#delete Pinpointsmsvoicev2Pool#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.57.1/docs/resources/pinpointsmsvoicev2_pool#update Pinpointsmsvoicev2Pool#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2PoolTimeoutsOutputReference <a name="Pinpointsmsvoicev2PoolTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer"></a>

```typescript
import { pinpointsmsvoicev2Pool } from '@cdktn/provider-aws'

new pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Pinpointsmsvoicev2PoolTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2Pool.Pinpointsmsvoicev2PoolTimeouts">Pinpointsmsvoicev2PoolTimeouts</a>

---



