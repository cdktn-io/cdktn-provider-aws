# `ssoadminCustomerManagedPolicyAttachmentsExclusive` Submodule <a name="`ssoadminCustomerManagedPolicyAttachmentsExclusive` Submodule" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsoadminCustomerManagedPolicyAttachmentsExclusive <a name="SsoadminCustomerManagedPolicyAttachmentsExclusive" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive aws_ssoadmin_customer_managed_policy_attachments_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

new ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive(scope: Construct, id: string, config: SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig">SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig">SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putCustomerManagedPolicyReference">putCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetCustomerManagedPolicyReference">resetCustomerManagedPolicyReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerManagedPolicyReference` <a name="putCustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putCustomerManagedPolicyReference"></a>

```typescript
public putCustomerManagedPolicyReference(value: IResolvable | SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putCustomerManagedPolicyReference.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putTimeouts"></a>

```typescript
public putTimeouts(value: SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a>

---

##### `resetCustomerManagedPolicyReference` <a name="resetCustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetCustomerManagedPolicyReference"></a>

```typescript
public resetCustomerManagedPolicyReference(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a SsoadminCustomerManagedPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isConstruct"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformElement"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformResource"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a SsoadminCustomerManagedPolicyAttachmentsExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the SsoadminCustomerManagedPolicyAttachmentsExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing SsoadminCustomerManagedPolicyAttachmentsExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the SsoadminCustomerManagedPolicyAttachmentsExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.customerManagedPolicyReferenceInput">customerManagedPolicyReferenceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.permissionSetArnInput">permissionSetArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `customerManagedPolicyReference`<sup>Required</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList;
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.timeouts"></a>

```typescript
public readonly timeouts: SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference</a>

---

##### `customerManagedPolicyReferenceInput`<sup>Optional</sup> <a name="customerManagedPolicyReferenceInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.customerManagedPolicyReferenceInput"></a>

```typescript
public readonly customerManagedPolicyReferenceInput: IResolvable | SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a>[]

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `permissionSetArnInput`<sup>Optional</sup> <a name="permissionSetArnInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.permissionSetArnInput"></a>

```typescript
public readonly permissionSetArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a>

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

const ssoadminCustomerManagedPolicyAttachmentsExclusiveConfig: ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#instance_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#instance_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.permissionSetArn">permissionSetArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#permission_set_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#permission_set_arn}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.customerManagedPolicyReference">customerManagedPolicyReference</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a>[]</code> | customer_managed_policy_reference block. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#instance_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#instance_arn}.

---

##### `permissionSetArn`<sup>Required</sup> <a name="permissionSetArn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.permissionSetArn"></a>

```typescript
public readonly permissionSetArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#permission_set_arn SsoadminCustomerManagedPolicyAttachmentsExclusive#permission_set_arn}.

---

##### `customerManagedPolicyReference`<sup>Optional</sup> <a name="customerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.customerManagedPolicyReference"></a>

```typescript
public readonly customerManagedPolicyReference: IResolvable | SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a>[]

customer_managed_policy_reference block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#customer_managed_policy_reference SsoadminCustomerManagedPolicyAttachmentsExclusive#customer_managed_policy_reference}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#region SsoadminCustomerManagedPolicyAttachmentsExclusive#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveConfig.property.timeouts"></a>

```typescript
public readonly timeouts: SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#timeouts SsoadminCustomerManagedPolicyAttachmentsExclusive#timeouts}

---

### SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

const ssoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference: ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#name SsoadminCustomerManagedPolicyAttachmentsExclusive#name}. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.property.path">path</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#path SsoadminCustomerManagedPolicyAttachmentsExclusive#path}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#name SsoadminCustomerManagedPolicyAttachmentsExclusive#name}.

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#path SsoadminCustomerManagedPolicyAttachmentsExclusive#path}.

---

### SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

const ssoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts: ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#create SsoadminCustomerManagedPolicyAttachmentsExclusive#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/ssoadmin_customer_managed_policy_attachments_exclusive#update SsoadminCustomerManagedPolicyAttachmentsExclusive#update}

---

## Classes <a name="Classes" id="Classes"></a>

### SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

new ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.get"></a>

```typescript
public get(index: number): SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a>[]

---


### SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

new ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resetPath">resetPath</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReferenceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference">SsoadminCustomerManagedPolicyAttachmentsExclusiveCustomerManagedPolicyReference</a>

---


### SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference <a name="SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer"></a>

```typescript
import { ssoadminCustomerManagedPolicyAttachmentsExclusive } from '@cdktn/provider-aws'

new ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.ssoadminCustomerManagedPolicyAttachmentsExclusive.SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts">SsoadminCustomerManagedPolicyAttachmentsExclusiveTimeouts</a>

---



