# `cloudfrontDistributionTenant` Submodule <a name="`cloudfrontDistributionTenant` Submodule" id="@cdktn/provider-aws.cloudfrontDistributionTenant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontDistributionTenant <a name="CloudfrontDistributionTenant" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant aws_cloudfront_distribution_tenant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenant(scope: Construct, id: string, config: CloudfrontDistributionTenantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig">CloudfrontDistributionTenantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig">CloudfrontDistributionTenantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations">putCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain">putDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest">putManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter">putParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId">resetConnectionGroupId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations">resetCustomizations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetDomain">resetDomain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest">resetManagedCertificateRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetWaitForDeployment">resetWaitForDeployment</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomizations` <a name="putCustomizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations"></a>

```typescript
public putCustomizations(value: IResolvable | CloudfrontDistributionTenantCustomizations[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putCustomizations.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>[]

---

##### `putDomain` <a name="putDomain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain"></a>

```typescript
public putDomain(value: IResolvable | CloudfrontDistributionTenantDomain[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putDomain.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>[]

---

##### `putManagedCertificateRequest` <a name="putManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest"></a>

```typescript
public putManagedCertificateRequest(value: IResolvable | CloudfrontDistributionTenantManagedCertificateRequest[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putManagedCertificateRequest.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>[]

---

##### `putParameter` <a name="putParameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter"></a>

```typescript
public putParameter(value: IResolvable | CloudfrontDistributionTenantParameter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putParameter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudfrontDistributionTenantTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

---

##### `resetConnectionGroupId` <a name="resetConnectionGroupId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetConnectionGroupId"></a>

```typescript
public resetConnectionGroupId(): void
```

##### `resetCustomizations` <a name="resetCustomizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetCustomizations"></a>

```typescript
public resetCustomizations(): void
```

##### `resetDomain` <a name="resetDomain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetDomain"></a>

```typescript
public resetDomain(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetManagedCertificateRequest` <a name="resetManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetManagedCertificateRequest"></a>

```typescript
public resetManagedCertificateRequest(): void
```

##### `resetParameter` <a name="resetParameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWaitForDeployment` <a name="resetWaitForDeployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.resetWaitForDeployment"></a>

```typescript
public resetWaitForDeployment(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CloudfrontDistributionTenant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudfrontDistributionTenant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudfrontDistributionTenant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudfrontDistributionTenant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations">customizations</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList">CloudfrontDistributionTenantCustomizationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domain">domain</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList">CloudfrontDistributionTenantDomainList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.etag">etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest">managedCertificateRequest</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList">CloudfrontDistributionTenantManagedCertificateRequestList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameter">parameter</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList">CloudfrontDistributionTenantParameterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsAll">tagsAll</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference">CloudfrontDistributionTenantTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput">connectionGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput">customizationsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput">distributionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainInput">domainInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput">managedCertificateRequestInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameterInput">parameterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeploymentInput">waitForDeploymentInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId">connectionGroupId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId">distributionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeployment">waitForDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `customizations`<sup>Required</sup> <a name="customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizations"></a>

```typescript
public readonly customizations: CloudfrontDistributionTenantCustomizationsList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList">CloudfrontDistributionTenantCustomizationsList</a>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domain"></a>

```typescript
public readonly domain: CloudfrontDistributionTenantDomainList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList">CloudfrontDistributionTenantDomainList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.etag"></a>

```typescript
public readonly etag: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `managedCertificateRequest`<sup>Required</sup> <a name="managedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequest"></a>

```typescript
public readonly managedCertificateRequest: CloudfrontDistributionTenantManagedCertificateRequestList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList">CloudfrontDistributionTenantManagedCertificateRequestList</a>

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameter"></a>

```typescript
public readonly parameter: CloudfrontDistributionTenantParameterList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList">CloudfrontDistributionTenantParameterList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeouts"></a>

```typescript
public readonly timeouts: CloudfrontDistributionTenantTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference">CloudfrontDistributionTenantTimeoutsOutputReference</a>

---

##### `connectionGroupIdInput`<sup>Optional</sup> <a name="connectionGroupIdInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupIdInput"></a>

```typescript
public readonly connectionGroupIdInput: string;
```

- *Type:* string

---

##### `customizationsInput`<sup>Optional</sup> <a name="customizationsInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.customizationsInput"></a>

```typescript
public readonly customizationsInput: IResolvable | CloudfrontDistributionTenantCustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>[]

---

##### `distributionIdInput`<sup>Optional</sup> <a name="distributionIdInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionIdInput"></a>

```typescript
public readonly distributionIdInput: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.domainInput"></a>

```typescript
public readonly domainInput: IResolvable | CloudfrontDistributionTenantDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>[]

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managedCertificateRequestInput`<sup>Optional</sup> <a name="managedCertificateRequestInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.managedCertificateRequestInput"></a>

```typescript
public readonly managedCertificateRequestInput: IResolvable | CloudfrontDistributionTenantManagedCertificateRequest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.parameterInput"></a>

```typescript
public readonly parameterInput: IResolvable | CloudfrontDistributionTenantParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudfrontDistributionTenantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

---

##### `waitForDeploymentInput`<sup>Optional</sup> <a name="waitForDeploymentInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeploymentInput"></a>

```typescript
public readonly waitForDeploymentInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `connectionGroupId`<sup>Required</sup> <a name="connectionGroupId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.connectionGroupId"></a>

```typescript
public readonly connectionGroupId: string;
```

- *Type:* string

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `waitForDeployment`<sup>Required</sup> <a name="waitForDeployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.waitForDeployment"></a>

```typescript
public readonly waitForDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontDistributionTenantConfig <a name="CloudfrontDistributionTenantConfig" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantConfig: cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId">distributionId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId">connectionGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations">customizations</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>[]</code> | customizations block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domain">domain</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>[]</code> | domain block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest">managedCertificateRequest</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>[]</code> | managed_certificate_request block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameter">parameter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>[]</code> | parameter block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.waitForDeployment">waitForDeployment</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `distributionId`<sup>Required</sup> <a name="distributionId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.distributionId"></a>

```typescript
public readonly distributionId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#distribution_id CloudfrontDistributionTenant#distribution_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}.

---

##### `connectionGroupId`<sup>Optional</sup> <a name="connectionGroupId" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.connectionGroupId"></a>

```typescript
public readonly connectionGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#connection_group_id CloudfrontDistributionTenant#connection_group_id}.

---

##### `customizations`<sup>Optional</sup> <a name="customizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.customizations"></a>

```typescript
public readonly customizations: IResolvable | CloudfrontDistributionTenantCustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>[]

customizations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#customizations CloudfrontDistributionTenant#customizations}

---

##### `domain`<sup>Optional</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.domain"></a>

```typescript
public readonly domain: IResolvable | CloudfrontDistributionTenantDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>[]

domain block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#enabled CloudfrontDistributionTenant#enabled}.

---

##### `managedCertificateRequest`<sup>Optional</sup> <a name="managedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.managedCertificateRequest"></a>

```typescript
public readonly managedCertificateRequest: IResolvable | CloudfrontDistributionTenantManagedCertificateRequest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>[]

managed_certificate_request block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#managed_certificate_request CloudfrontDistributionTenant#managed_certificate_request}

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.parameter"></a>

```typescript
public readonly parameter: IResolvable | CloudfrontDistributionTenantParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>[]

parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#parameter CloudfrontDistributionTenant#parameter}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#tags CloudfrontDistributionTenant#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudfrontDistributionTenantTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#timeouts CloudfrontDistributionTenant#timeouts}

---

##### `waitForDeployment`<sup>Optional</sup> <a name="waitForDeployment" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantConfig.property.waitForDeployment"></a>

```typescript
public readonly waitForDeployment: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#wait_for_deployment CloudfrontDistributionTenant#wait_for_deployment}.

---

### CloudfrontDistributionTenantCustomizations <a name="CloudfrontDistributionTenantCustomizations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantCustomizations: cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate">certificate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>[]</code> | certificate block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestriction">geoRestriction</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>[]</code> | geo_restriction block. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl">webAcl</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>[]</code> | web_acl block. |

---

##### `certificate`<sup>Optional</sup> <a name="certificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.certificate"></a>

```typescript
public readonly certificate: IResolvable | CloudfrontDistributionTenantCustomizationsCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>[]

certificate block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate CloudfrontDistributionTenant#certificate}

---

##### `geoRestriction`<sup>Optional</sup> <a name="geoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.geoRestriction"></a>

```typescript
public readonly geoRestriction: IResolvable | CloudfrontDistributionTenantCustomizationsGeoRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>[]

geo_restriction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#geo_restriction CloudfrontDistributionTenant#geo_restriction}

---

##### `webAcl`<sup>Optional</sup> <a name="webAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations.property.webAcl"></a>

```typescript
public readonly webAcl: IResolvable | CloudfrontDistributionTenantCustomizationsWebAcl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>[]

web_acl block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#web_acl CloudfrontDistributionTenant#web_acl}

---

### CloudfrontDistributionTenantCustomizationsCertificate <a name="CloudfrontDistributionTenantCustomizationsCertificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantCustomizationsCertificate: cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}. |

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}.

---

### CloudfrontDistributionTenantCustomizationsGeoRestriction <a name="CloudfrontDistributionTenantCustomizationsGeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantCustomizationsGeoRestriction: cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.locations">locations</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.restrictionType">restrictionType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}. |

---

##### `locations`<sup>Optional</sup> <a name="locations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#locations CloudfrontDistributionTenant#locations}.

---

##### `restrictionType`<sup>Optional</sup> <a name="restrictionType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction.property.restrictionType"></a>

```typescript
public readonly restrictionType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#restriction_type CloudfrontDistributionTenant#restriction_type}.

---

### CloudfrontDistributionTenantCustomizationsWebAcl <a name="CloudfrontDistributionTenantCustomizationsWebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantCustomizationsWebAcl: cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action">action</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn">arn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}. |

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#action CloudfrontDistributionTenant#action}.

---

##### `arn`<sup>Optional</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#arn CloudfrontDistributionTenant#arn}.

---

### CloudfrontDistributionTenantDomain <a name="CloudfrontDistributionTenantDomain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantDomain: cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.property.domain">domain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}. |

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#domain CloudfrontDistributionTenant#domain}.

---

### CloudfrontDistributionTenantManagedCertificateRequest <a name="CloudfrontDistributionTenantManagedCertificateRequest" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantManagedCertificateRequest: cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName">primaryDomainName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost">validationTokenHost</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}. |

---

##### `certificateTransparencyLoggingPreference`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.certificateTransparencyLoggingPreference"></a>

```typescript
public readonly certificateTransparencyLoggingPreference: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#certificate_transparency_logging_preference CloudfrontDistributionTenant#certificate_transparency_logging_preference}.

---

##### `primaryDomainName`<sup>Optional</sup> <a name="primaryDomainName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.primaryDomainName"></a>

```typescript
public readonly primaryDomainName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#primary_domain_name CloudfrontDistributionTenant#primary_domain_name}.

---

##### `validationTokenHost`<sup>Optional</sup> <a name="validationTokenHost" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest.property.validationTokenHost"></a>

```typescript
public readonly validationTokenHost: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#validation_token_host CloudfrontDistributionTenant#validation_token_host}.

---

### CloudfrontDistributionTenantParameter <a name="CloudfrontDistributionTenantParameter" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantParameter: cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#name CloudfrontDistributionTenant#name}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#value CloudfrontDistributionTenant#value}.

---

### CloudfrontDistributionTenantTimeouts <a name="CloudfrontDistributionTenantTimeouts" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

const cloudfrontDistributionTenantTimeouts: cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#create CloudfrontDistributionTenant#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#delete CloudfrontDistributionTenant#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/cloudfront_distribution_tenant#update CloudfrontDistributionTenant#update}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontDistributionTenantCustomizationsCertificateList <a name="CloudfrontDistributionTenantCustomizationsCertificateList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTenantCustomizationsCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantCustomizationsCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>[]

---


### CloudfrontDistributionTenantCustomizationsCertificateOutputReference <a name="CloudfrontDistributionTenantCustomizationsCertificateOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetArn` <a name="resetArn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantCustomizationsCertificate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>

---


### CloudfrontDistributionTenantCustomizationsGeoRestrictionList <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictionList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantCustomizationsGeoRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>[]

---


### CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference <a name="CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetLocations">resetLocations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetRestrictionType">resetRestrictionType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLocations` <a name="resetLocations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetLocations"></a>

```typescript
public resetLocations(): void
```

##### `resetRestrictionType` <a name="resetRestrictionType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.resetRestrictionType"></a>

```typescript
public resetRestrictionType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locationsInput">locationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionTypeInput">restrictionTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations">locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType">restrictionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `locationsInput`<sup>Optional</sup> <a name="locationsInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locationsInput"></a>

```typescript
public readonly locationsInput: string[];
```

- *Type:* string[]

---

##### `restrictionTypeInput`<sup>Optional</sup> <a name="restrictionTypeInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionTypeInput"></a>

```typescript
public readonly restrictionTypeInput: string;
```

- *Type:* string

---

##### `locations`<sup>Required</sup> <a name="locations" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.locations"></a>

```typescript
public readonly locations: string[];
```

- *Type:* string[]

---

##### `restrictionType`<sup>Required</sup> <a name="restrictionType" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.restrictionType"></a>

```typescript
public readonly restrictionType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantCustomizationsGeoRestriction;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>

---


### CloudfrontDistributionTenantCustomizationsList <a name="CloudfrontDistributionTenantCustomizationsList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTenantCustomizationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantCustomizations[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>[]

---


### CloudfrontDistributionTenantCustomizationsOutputReference <a name="CloudfrontDistributionTenantCustomizationsOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate">putCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction">putGeoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl">putWebAcl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate">resetCertificate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestriction">resetGeoRestriction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl">resetWebAcl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCertificate` <a name="putCertificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate"></a>

```typescript
public putCertificate(value: IResolvable | CloudfrontDistributionTenantCustomizationsCertificate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putCertificate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>[]

---

##### `putGeoRestriction` <a name="putGeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction"></a>

```typescript
public putGeoRestriction(value: IResolvable | CloudfrontDistributionTenantCustomizationsGeoRestriction[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putGeoRestriction.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>[]

---

##### `putWebAcl` <a name="putWebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl"></a>

```typescript
public putWebAcl(value: IResolvable | CloudfrontDistributionTenantCustomizationsWebAcl[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.putWebAcl.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>[]

---

##### `resetCertificate` <a name="resetCertificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetCertificate"></a>

```typescript
public resetCertificate(): void
```

##### `resetGeoRestriction` <a name="resetGeoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetGeoRestriction"></a>

```typescript
public resetGeoRestriction(): void
```

##### `resetWebAcl` <a name="resetWebAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.resetWebAcl"></a>

```typescript
public resetWebAcl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate">certificate</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList">CloudfrontDistributionTenantCustomizationsCertificateList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction">geoRestriction</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList">CloudfrontDistributionTenantCustomizationsGeoRestrictionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl">webAcl</a></code> | <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList">CloudfrontDistributionTenantCustomizationsWebAclList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput">certificateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionInput">geoRestrictionInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput">webAclInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificate"></a>

```typescript
public readonly certificate: CloudfrontDistributionTenantCustomizationsCertificateList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificateList">CloudfrontDistributionTenantCustomizationsCertificateList</a>

---

##### `geoRestriction`<sup>Required</sup> <a name="geoRestriction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestriction"></a>

```typescript
public readonly geoRestriction: CloudfrontDistributionTenantCustomizationsGeoRestrictionList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestrictionList">CloudfrontDistributionTenantCustomizationsGeoRestrictionList</a>

---

##### `webAcl`<sup>Required</sup> <a name="webAcl" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAcl"></a>

```typescript
public readonly webAcl: CloudfrontDistributionTenantCustomizationsWebAclList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList">CloudfrontDistributionTenantCustomizationsWebAclList</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: IResolvable | CloudfrontDistributionTenantCustomizationsCertificate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsCertificate">CloudfrontDistributionTenantCustomizationsCertificate</a>[]

---

##### `geoRestrictionInput`<sup>Optional</sup> <a name="geoRestrictionInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.geoRestrictionInput"></a>

```typescript
public readonly geoRestrictionInput: IResolvable | CloudfrontDistributionTenantCustomizationsGeoRestriction[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsGeoRestriction">CloudfrontDistributionTenantCustomizationsGeoRestriction</a>[]

---

##### `webAclInput`<sup>Optional</sup> <a name="webAclInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.webAclInput"></a>

```typescript
public readonly webAclInput: IResolvable | CloudfrontDistributionTenantCustomizationsWebAcl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantCustomizations;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizations">CloudfrontDistributionTenantCustomizations</a>

---


### CloudfrontDistributionTenantCustomizationsWebAclList <a name="CloudfrontDistributionTenantCustomizationsWebAclList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTenantCustomizationsWebAclOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantCustomizationsWebAcl[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>[]

---


### CloudfrontDistributionTenantCustomizationsWebAclOutputReference <a name="CloudfrontDistributionTenantCustomizationsWebAclOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn">resetArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAction` <a name="resetAction" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetArn` <a name="resetArn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.resetArn"></a>

```typescript
public resetArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput">arnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `arnInput`<sup>Optional</sup> <a name="arnInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arnInput"></a>

```typescript
public readonly arnInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAclOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantCustomizationsWebAcl;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantCustomizationsWebAcl">CloudfrontDistributionTenantCustomizationsWebAcl</a>

---


### CloudfrontDistributionTenantDomainList <a name="CloudfrontDistributionTenantDomainList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTenantDomainOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantDomain[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>[]

---


### CloudfrontDistributionTenantDomainOutputReference <a name="CloudfrontDistributionTenantDomainOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domainInput">domainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domainInput"></a>

```typescript
public readonly domainInput: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomainOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantDomain;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantDomain">CloudfrontDistributionTenantDomain</a>

---


### CloudfrontDistributionTenantManagedCertificateRequestList <a name="CloudfrontDistributionTenantManagedCertificateRequestList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTenantManagedCertificateRequestOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantManagedCertificateRequest[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>[]

---


### CloudfrontDistributionTenantManagedCertificateRequestOutputReference <a name="CloudfrontDistributionTenantManagedCertificateRequestOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference">resetCertificateTransparencyLoggingPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName">resetPrimaryDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost">resetValidationTokenHost</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCertificateTransparencyLoggingPreference` <a name="resetCertificateTransparencyLoggingPreference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetCertificateTransparencyLoggingPreference"></a>

```typescript
public resetCertificateTransparencyLoggingPreference(): void
```

##### `resetPrimaryDomainName` <a name="resetPrimaryDomainName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetPrimaryDomainName"></a>

```typescript
public resetPrimaryDomainName(): void
```

##### `resetValidationTokenHost` <a name="resetValidationTokenHost" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.resetValidationTokenHost"></a>

```typescript
public resetValidationTokenHost(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput">certificateTransparencyLoggingPreferenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput">primaryDomainNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput">validationTokenHostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference">certificateTransparencyLoggingPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName">primaryDomainName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost">validationTokenHost</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateTransparencyLoggingPreferenceInput`<sup>Optional</sup> <a name="certificateTransparencyLoggingPreferenceInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreferenceInput"></a>

```typescript
public readonly certificateTransparencyLoggingPreferenceInput: string;
```

- *Type:* string

---

##### `primaryDomainNameInput`<sup>Optional</sup> <a name="primaryDomainNameInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainNameInput"></a>

```typescript
public readonly primaryDomainNameInput: string;
```

- *Type:* string

---

##### `validationTokenHostInput`<sup>Optional</sup> <a name="validationTokenHostInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHostInput"></a>

```typescript
public readonly validationTokenHostInput: string;
```

- *Type:* string

---

##### `certificateTransparencyLoggingPreference`<sup>Required</sup> <a name="certificateTransparencyLoggingPreference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.certificateTransparencyLoggingPreference"></a>

```typescript
public readonly certificateTransparencyLoggingPreference: string;
```

- *Type:* string

---

##### `primaryDomainName`<sup>Required</sup> <a name="primaryDomainName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.primaryDomainName"></a>

```typescript
public readonly primaryDomainName: string;
```

- *Type:* string

---

##### `validationTokenHost`<sup>Required</sup> <a name="validationTokenHost" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.validationTokenHost"></a>

```typescript
public readonly validationTokenHost: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequestOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantManagedCertificateRequest;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantManagedCertificateRequest">CloudfrontDistributionTenantManagedCertificateRequest</a>

---


### CloudfrontDistributionTenantParameterList <a name="CloudfrontDistributionTenantParameterList" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get"></a>

```typescript
public get(index: number): CloudfrontDistributionTenantParameterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantParameter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>[]

---


### CloudfrontDistributionTenantParameterOutputReference <a name="CloudfrontDistributionTenantParameterOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantParameter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantParameter">CloudfrontDistributionTenantParameter</a>

---


### CloudfrontDistributionTenantTimeoutsOutputReference <a name="CloudfrontDistributionTenantTimeoutsOutputReference" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudfrontDistributionTenant } from '@cdktn/provider-aws'

new cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudfrontDistributionTenantTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktn/provider-aws.cloudfrontDistributionTenant.CloudfrontDistributionTenantTimeouts">CloudfrontDistributionTenantTimeouts</a>

---



